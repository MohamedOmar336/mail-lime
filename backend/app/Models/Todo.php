<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    protected $fillable = [
        'text',
        'due_date',
    ];

    protected $hidden = [
        'user_id',
    ];

    protected $casts = [
        'due_date' => 'datetime',
    ];
}
