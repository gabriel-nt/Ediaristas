<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class ViaCEP
{
    /**
     * Consulta CEP no via cep
     *
     * @param string $cep
     * @return bool|array
     */
    public function search(string $zipCode)
    {
        $url = sprintf('https://viacep.com.br/ws/%s/json/', $zipCode);

        $response = Http::get($url);

        if ($response->failed()) {
            return false;
        }

        $data = $response->json();

        if (isset($data['erro']) && $data['erro']) {
            return false;
        }

        return $data;
    }
}
