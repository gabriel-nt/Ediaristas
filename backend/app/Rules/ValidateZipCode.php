<?php

namespace App\Rules;

use App\Services\ViaCEP;

use Illuminate\Contracts\Validation\Rule;

class ValidateZipCode implements Rule
{
    protected ViaCEP $service;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct(ViaCEP $service)
    {
        $this->service = $service;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $zipCode = str_replace('-', '', $value);
        return $this->service->search($zipCode);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'CEP inválido';
    }
}
