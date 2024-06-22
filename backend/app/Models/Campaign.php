<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Campaign extends Model
{
    protected $fillable = [
        'company_id',
        'name',
        'type',
        'is_ab_testing',
        'status',
        'scheduled_date',
        'content',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function audience()
    {
        return $this->hasMany(CampaignAudience::class)->with('contact');
    }
}
