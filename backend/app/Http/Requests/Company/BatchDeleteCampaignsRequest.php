<?php

namespace App\Http\Requests\Company;

use App\Models\Campaign;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class BatchDeleteCampaignsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->can('batchDeleteCampaigns', Campaign::class);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        $companyId = $this->user()->company_id;

        return [
            'campaigns' => 'required|array',
            'campaigns.*.id' => [
                'required',
                'integer',
                Rule::exists('campaigns', 'id')->where(function ($query) use ($companyId) {
                    $query->where('company_id', $companyId);
                }),
            ],
        ];
    }
}
