<?php

namespace App\Http\Controllers;

use App\Services\ViaCEP;
use App\Models\Diarist;

use Illuminate\Http\Request;

class SearchDiaristZipCode extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, ViaCEP $service)
    {
        $address = $service->search($request->zipCode);

        if (!$address) {
            return response()->json(['erro' => 'Cep inválido'], 400);
        }

        return [
            'diarists' => Diarist::searchByIbgeCode($address['ibge']),
            'count_diarists' => Diarist::countByIbgeCode($address['ibge']),
        ];
    }
}
