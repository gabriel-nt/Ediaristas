@csrf

<div class="mb-3">
    <label for="full_name" class="form-label">Nome Completo</label>
    <input value="{{ @$diarist->full_name }}" type="text" class="form-control" id="full_name" name="full_name" required maxlength="100">
</div>
<div class="mb-3">
    <label for="cpf" class="form-label">CPF</label>
    <input value="{{ @$diarist->cpf }}" type="text" class="form-control" id="cpf" name="cpf" required maxlength="14">
</div>
<div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input value="{{ @$diarist->email }}" type="email" class="form-control" id="email" name="email" required maxlength="100">
</div>
<div class="mb-3">
    <label for="phone" class="form-label">Telefone</label>
    <input value="{{ @$diarist->phone }}" type="text" class="form-control" id="phone" name="phone" required maxlength="15">
</div>
<div class="mb-3">
    <label for="street" class="form-label">Logradouro</label>
    <input value="{{ @$diarist->street }}" type="text" class="form-control" id="street" name="street" required maxlength="255">
</div>
<div class="mb-3">
    <label for="number" class="form-label">Número</label>
    <input value="{{ @$diarist->number }}" type="text" class="form-control" id="number" name="number" required maxlength="20">
</div>
<div class="mb-3">
    <label for="address" class="form-label">Complemento</label>
    <input value="{{ @$diarist->address }}" type="text" class="form-control" id="address" name="address" maxlength="50">
</div>
<div class="mb-3">
    <label for="zip_code" class="form-label">CEP</label>
    <input value="{{ @$diarist->zip_code }}" type="text" class="form-control" id="zip_code" name="zip_code" required maxlength="9">
</div>
<div class="mb-3">
    <label for="neighborhood" class="form-label">Bairro</label>
    <input value="{{ @$diarist->neighborhood }}" type="text" class="form-control" id="neighborhood" name="neighborhood" required maxlength="50">
</div>
<div class="mb-3">
    <label for="city" class="form-label">Cidade</label>
    <input value="{{ @$diarist->city }}" type="text" class="form-control" id="city" name="city" required maxlength="50">
</div>
<div class="mb-3">
    <label for="state" class="form-label">Estado</label>
    <input value="{{ @$diarist->state }}" type="text" class="form-control" id="state" name="state" required maxlength="2">
</div>
<div class="mb-3">
    <label for="photo" class="form-label">Foto</label>
    <input type="file" class="form-control" id="photo" name="photo" >
</div>
