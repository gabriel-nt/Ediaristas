@extends('app')

@section('title', 'E-diaristas')

@section('content')
<h1>Lista de diaristas</h1>

<table class="table">
    <thead class="table-light">
        <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Telefone</th>
            <th scope="col">Ações</th>
        </tr>
    </thead>
    <tbody>
    @forelse ($diarists as $diarist)
        <tr>
            <th scope="row">{{ $diarist->id }}</th>
            <td>{{ $diarist->full_name }}</td>
            <td>{{ $diarist->phone }}</td>
            <td>
                <a href="{{ route('diarist.edit', $diarist) }}" class="btn btn-primary">Atualizar</a>
                <a href="{{ route('diarist.destroy', $diarist) }}" class="btn btn-danger" onclick="return confirm('Tem certeza que deseja apagar')">Apagar</a>
            </td>
        </tr>
        @empty
        <tr>
            <th scope="row">1</th>
            <td>Nenhum registrado cadastrado</td>
            <td></td>
            <td></td>
        </tr>
    @endforelse
    </tbody>
</table>

<a href="{{ route('diarist.create') }}" class="btn btn-success">Nova diarista</a>
@endsection
