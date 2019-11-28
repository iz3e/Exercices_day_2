// creacion de la clase padre
class carro {
    constructor(placa,modelo){
        this.placa = placa
        this.modelo = modelo
    }
// metodos para obtener placa y modelo
getPlaca(){
    return this.placa
}
getModelo(){
    return this.modelo
}
}
//creacion de clase hija taxi
class taxi extends carro{
    constructor(placa,modelo,noLicencia){
        super(placa, modelo)
        this.noLicencia = noLicencia
    }
// metodos para obtener la licencia del taxi
getNumeroLicencia(){
    return this.noLicencia
}
setNumeroLicencia(nl){
    this.noLicencia = nl
}
}
// creacion de clase hija plazas
class plazas extends carro{
    constructor(placa, modelo, noPlazas){
        super(placa, modelo)
        this.noPlazas = noPlazas
    }
// metodos para ala obtencion del numero de plazas
getNumeroPlazas(){
    return this.noPlazas
}
setNumeroPlazas(np){
    this.noPlazas = np
}
}
