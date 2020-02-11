<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use App\Place; 

class User extends Authenticatable
{
    use Notifiable;
    use HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function createUser($request) {

        /* Criação dos atributos de usuário */
        $this->first_name = $request->first_name;
        $this->last_name = $request->last_name;
        $this->email = $request->email;
        $this->password = $request->password;
        $this->description = $request->description;
        $this->photo = $request->photo;

        /* Usuário também é guia? */
        if ($request->is_guide) {
            $this->is_guide = $request->is_guide;
            $this->cpf = $request->cpf;
            $this->phone_number = $request->phone_number;
            $this->cadastur = $request->cadastur;
        }

        $this->save();
    }

    public function updateUser($request) {

        /* Update atributos de usuário */
        if($request->first_name) {
            $this->first_name = $request->first_name;
        }
        if($request->last_name) {
            $this->last_name = $request->last_name;
        }
        if($request->email) {
            $this->email = $request->email;
        }
        if($request->password) {
            $this->password = $request->password;
        }
        if($request->description) {
            $this->description = $request->description;
        }
        if($request->photo) {
            $this->photo = $request->photo;
        }

        /* Update atributos de guia */
        if($request->cpf) {
            $this->cpf = $request->cpf;
        }
        if($request->phone_number) {
            $this->phone_number = $request->phone_number;
        }
        if($request->cadastur) {
            $this->cadastur = $request->cadastur;
        }

        $this->save();
    }

    public function ratings() {
        return $this->belongsToMany('App\Place', 'ratings')->withPivot('rating', 'comment', 'ratingDate');
    }

    public function favorites() {
        return $this->belongsToMany('App\Place', 'favorites');
    }

}
