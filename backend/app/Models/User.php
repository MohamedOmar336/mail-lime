<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'user_role_id',
        'company_id',
        'profile_picture',
        'location',
        'timezone_offset',
    ];

    protected $hidden = [
        'password',
        'user_role_id',
        'company_id',
        'remember_token',
    ];

    protected $casts = [
        'password' => 'hashed',
        'profile_picture' => 'string',
    ];

    protected $with = [
        'userRole',
        'company',
    ];

    public function userRole()
    {
        return $this->belongsTo(UserRole::class);
    }

    public function todos()
    {
        return $this->hasMany(Todo::class);
    }

    public function notes()
    {
        return $this->hasMany(Note::class);
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function fullName()
    {
        return $this->first_name . ' ' . $this->last_name;
    }

    // Accessor to automatically prepend the asset path to profile_picture
    public function getProfilePictureAttribute($value)
    {
        return asset('storage/profile-pictures/' . $value);
    }
}
