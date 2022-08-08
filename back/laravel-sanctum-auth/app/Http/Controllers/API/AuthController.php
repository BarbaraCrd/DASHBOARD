<?php
   
namespace App\Http\Controllers\API;
   
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Models\User;
   
class AuthController extends BaseController
{

    public function signin(Request $request)
    {
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
            $authUser = Auth::user(); 
            $success['token'] =  $authUser->createToken('MyAuthApp')->plainTextToken; 
   
            return $this->sendResponse($success, 'User signed in');
        } 
        else{ 
            return $this->sendError('Unauthorised.', ['error'=>'Unauthorised']);
        } 
    }

    public function signup(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'firstName' => 'required',
            'lastName' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'confirm_password' => 'required|same:password',
            'uRole' => 'required',
        ]);
   
        if($validator->fails()){
            return $this->sendError('Error validation', $validator->errors());       
        }
   
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('MyAuthApp')->plainTextToken;
   
        return $this->sendResponse($success, 'User created successfully.');
    }

    public function indexUser()
    {
        $users = User::all();
        return $users;
    }

    public function loggedUser()
    {
        $user = Auth::user();
        return $user;
    }

   

    public function updatei(Request $request, User $user, $id)
    {
        $user = User::find($id);
        $input = $request->all();
        $validator = Validator::make($input, [
            'firstName',
            'lastName',
            'email',

        ]);
        if($validator->fails()){
            return $this->sendError($validator->errors());       
        }
        
        $user->firstName = request('firstName');
        $user->lastName = request('lastName');
        $user->email = request('email');
        $user->update();
        
        return $user;
    }

    public function updateadmin(Request $request, User $user, $id)
    {
        $user = User::find($id);
        $input = $request->all();
        $validator = Validator::make($input, [
            'firstName',
            'lastName',
            'email',
            'uRole,'

        ]);
        if($validator->fails()){
            return $this->sendError($validator->errors());       
        }
        
        $user->firstName = request('firstName');
        $user->lastName = request('lastName');
        $user->email = request('email');
        $user->uRole = request('uRole');
        $user->update();
        
        return $user;
    }

    public function updatep(Request $request, User $user, $id)
    {
        $user = User::find($id);
        $input = $request->all();
        $validator = Validator::make($input, [
            'password' => 'required',
            'confirm_password' => 'required|same:password',

        ]);
        if($validator->fails()){
            return $this->sendError($validator->errors());       
        }
        
        $user->password = bcrypt(request('password'));
        $user->update();
        
        return $user;
    }


    public function destroyUser($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
   
        return $this->sendResponse([], 'User deleted.');
    }
   
}