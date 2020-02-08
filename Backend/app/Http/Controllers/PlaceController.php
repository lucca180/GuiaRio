<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Place;

class PlaceController extends Controller
{
    public function createPlace(Request $request) {

        $validatorPlace = Validator::make($request->all(), [

        /*Validações de lugar*/
        'name' => 'required|string',
        'description' => 'string',
        'address' => 'required|string',
        'category' => 'integer',
        'site' => 'url',
        ]);
        
        if($validatorPlace->fails()) {
            return response()->json($validatorPlace->errors());
        }

        $place = new Place;
        $place->createPlace($request);
        return response()->json([$place]);
    }

    public function listPlace() {
        $place = Place::all();
        return response()->json($place);
    }

    public function showPlace($id) {
        $place = Place::findOrFail($id);
        return response()->json([$place]);
    }

    public function updatePlace(Request $request, $id) {

        $place = Place::find($id);

        if($place) {

            $validatorUser = Validator::make($request->all(), [

            /*Validações de lugar*/
            'name' => 'string',
            'description' => 'string',
            'address' => 'string',
            'category' => 'integer',
            'site' => 'url',
            
            ]);
                
            if($validatorUser->fails()) {
                return response()->json($validatorUser->errors());
            }

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
