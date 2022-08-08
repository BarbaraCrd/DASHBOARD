<?php

namespace App\Http\Controllers;

use App\Models\Widget;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class WidgetController extends Controller
{
    public function store(Request $request)
    {
        $newWidget = new Widget;
        $newWidget->user_id = request('user_id');
        $newWidget->widget_type = request('widget_type');
        $newWidget->save();

        return $newWidget;
    }


    public function index()
    {
        $widgets = Widget::all();
        return $widgets;
    }

    public function indexType()
    {
        $widgetsType = DB::table('widgets')->where('widget_type', 'todo')->get();
        return $widgetsType;
    }

    public function destroy($id)
    {
        $widget = Widget::findOrFail($id);
        $widget->delete();
    }
}
