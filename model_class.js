class carro {
    constructor(placa,modelo){
        this.placa = placa
        this.modelo = modelo
    }
getPlaca(){
    return this.placa
}
getModelo(){
    return this.modelo
}
}
class taxi extends carro{
    constructor(noLicencia){
        super(noLicencia,noLicencia)
    }
getNumeroLicencia(){
    return this.noLicencia
}
setNumeroLicencia(nl){
    this.noLicencia = nl
}
}

class plazas extends carro{
    constructor(noPlazas){
        super(noPlazas)
    }
getNumeroPlazas(){
    return this.noPlazas
}
setNumeroPlazas(np){
    this.noPlazas = np
}
}
