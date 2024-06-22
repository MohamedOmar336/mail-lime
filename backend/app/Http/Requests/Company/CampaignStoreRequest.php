<?php

namespace App\Http\Requests\Company;

use App\Models\Campaign;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CampaignStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->can('createCampaign', Campaign::class);
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
            'name' => 'required|string',
            'scheduled_date' => [
                Rule::requiredIf(function () {
                    return $this->input('status') === 'scheduled';
                }),
                'date',
                'after_or_equal:now',
            ],
            'contacts' => [
                'required',
                'array',
                Rule::exists('contacts', 'id')->where('company_id', $companyId),
            ],
            'type' => [
                'required',
                Rule::in(['email', 'sms']),
            ],
            'is_ab_testing' => 'required|boolean',
            'content' => 'required|json',
            'status' => [
                'required',
                Rule::in(['scheduled', 'drafted']),
            ],
        ];
    }
}
