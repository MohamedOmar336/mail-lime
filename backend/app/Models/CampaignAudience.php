<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CampaignAudience extends Model
{
    /**
    * The table associated with the model.
    *
    * @var string
    */
    protected $table = 'campaigns_audience';

    protected $fillable = [
        'company_id',
        'contact_id',
    ];

    public function campaign()
    {
        return $this->belongsTo(Campaign::class);
    }

    public function contact()
    {
        return $this->belongsTo(Contact::class);
    }
}
