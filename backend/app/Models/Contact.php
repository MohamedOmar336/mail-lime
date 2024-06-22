<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
        'name',
        'email',
        'phone_number',
        'company_id',
    ];

    protected $hidden = [

    ];

    protected $casts = [

    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
