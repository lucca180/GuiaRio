<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Place;

class PlaceController extends Controller
{
    public function createPlace(Request $request) {
        $place = new Place;
        $place->createPlace($request);
        return response()->json([$place]);
    }

    public function showPlace($id) {
        $place = Place::findOrFail($id);
        return response()->json([$place]);
    }

    public function updatePlace(Request $request, $id) {
        $place = Place::find($id);
        if($place) {
            $place->updatePlace($request, $id);
            return response()->json([$place]);
        } else {
            return response()->json(['Este lugar não existe!']);
        }
    }

    public function deletePlace($id) {
        Place::destroy($id);
        return response()->json(['Lugar deletado!']);
    }
}
