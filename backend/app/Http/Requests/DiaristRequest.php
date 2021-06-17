<?php

namespace App\Http\Requests;

use App\Services\ViaCEP;
use App\Rules\ValidateZipCode;
use Illuminate\Foundation\Http\FormRequest;

class DiaristRequest extends FormRequest
{
    protected ViaCEP $service;

    public function __construct(ViaCEP $service)
    {
        $this->service = $service;
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'full_name' => ['required', 'max:100'],
            'cpf' => ['required', 'size:14'],
            'email' => ['required', 'max:100', 'email'],
            'phone' => ['required', 'size:15'],
            'address' => ['required', 'max:255'],
            'number' => ['required', 'max:20'],
            'neighborhood' => ['required', 'max:50'],
            'city' => ['required', 'max:50'],
            'state' => ['required', 'size:2'],
            'zip_code' => ['required', new ValidateZipCode($this->service)],
            'photo' => ['image'],
        ];

        if ($this->isMethod('post')) {
            $rules['photo'] = ['required', 'image'];
        }

        return $rules;
    }
}
