<?php

namespace App\Http\Controllers;

use App\Models\Diarist;
use App\Services\ViaCEP;
use App\Http\Requests\DiaristRequest;

use Illuminate\Http\Request;

class DiaristController extends Controller
{
    protected ViaCEP $service;

    public function __construct(ViaCEP $service)
    {
        $this->service = $service;
    }

    /**
     * List the diarists
     *
     * @return void
     */
    public function index()
    {
        $diarists = Diarist::get();

        return view('index', [
            'diarists' => $diarists,
        ]);
    }

    /**
     * Show create form
     *
     * @return void
     */
    public function create()
    {
        return view('create');
    }

    /**
     * Create new diarist
     *
     * @param DiaristRequest $request
     * @return void
     */
    public function store(DiaristRequest $request)
    {
        dd($request);

        $data = $request->except('_token');
        $data['photo'] = $request->photo->store('public');

        $data['cpf'] = str_replace(['.', '-'], '', $data['cpf']);
        $data['zip_code'] = str_replace('-', '', $data['zip_code']);
        $data['phone'] = str_replace(['(', ')', ' ', '-'], '', $data['phone']);
        $data['ibge_code'] = $this->service->search($data['zip_code'])['ibge'];

        Diarist::create($data);

        return redirect()->route('diarist.index');
    }

    /**
     * Show form update with values
     *
     * @param integer $id
     * @return void
     */
    public function edit(int $id)
    {
        $diarist = Diarist::findOrFail($id);

        return view('edit', [
            'diarist' => $diarist,
        ]);
    }

    /**
     * Update the diarist
     *
     * @param integer $id
     * @param DiaristRequest $request
     * @return void
     */
    public function update(int $id, DiaristRequest $request)
    {
        $diarist = Diarist::findOrFail($id);
        $data = $request->except(['_token', '_method']);

        if ($request->hasFile('photo')) {
            $data['photo'] = $request->photo->store('public');
        }

        $data['cpf'] = str_replace(['.', '-'], '', $data['cpf']);
        $data['zip_code'] = str_replace('-', '', $data['zip_code']);
        $data['phone'] = str_replace(['(', ')', ' ', '-'], '', $data['phone']);
        $data['ibge_code'] = $this->service->search($data['zip_code'])['ibge'];

        $diarist->update($data);

        return redirect()->route('diarist.index');
    }

    /**
     * Delete the diarist
     *
     * @param integer $id
     * @return void
     */
    public function destroy(int $id)
    {
        $diarist = Diarist::findOrFail($id);

        $diarist->delete();

        return redirect()->route('diarist.index');
    }
}
