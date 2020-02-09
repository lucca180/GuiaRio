<?php

use Illuminate\Database\Seeder;

class PlacesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Place::create([
            'name' => 'Corcovado',
            'description' => 'O Corcovado é um dos morros da cidade, 
            célebre no Brasil e no mundo pela sua estátua do Cristo Redentor de 38 metros de altura.',
            'address' => 'Rua Cosme Velho, 513 - Cosme Velho'
        ]);

        App\Place::create([
            'name' => 'Pão de Açucar',
            'description' => 'O Pão de Açúcar é um complexo de morros localizado no bairro da Urca.
            Junto com a estátua do Cristo Redentor, é o maior cartão-postal da cidade do Rio de Janeiro.
            Possui, como atração complementar, o passeio de teleférico.',
            'address' => 'Avenida Pasteur, 520 - Urca'
        ]);

        App\Place::create([
            'name' => 'Praia de Copacabana',
            'description' => 'A Praia de Copacabana é a mais famosa da cidade (talvez até do país, ou do mundo) 
            e possui cerca de 4 km de extensão. Entre as marcas registradas, está o seu calçadão com ondas 
            desenhadas em pedra portuguesa, projetado pelo paisagista Burle Max.',
            'address' => 'Avenida Atlântica, s/n - Copacabana'
        ]);

        App\Place::create([
            'name' => 'Arcos da Lapa',
            'description' => 'Considerada como a obra arquitetônica de maior porte empreendida no Brasil durante 
            o período colonial, é hoje um dos cartões-postais da cidade, símbolo mais representativo do 
            Rio de Janeiro antigo preservado na região boêmia da Lapa.',
            'address' => 'Praça Cardeal Câmara, s/n - Lapa'
        ]);

        App\Place::create([
            'name' => 'Theatro Municipal',
            'description' => 'Um dos mais imponentes e belos prédios do Rio de Janeiro, o Theatro Municipal, 
            inaugurado em 14 de julho de 1909, é considerado a principal casa de espetáculos do Brasil 
            e uma das mais importantes da América do Sul.',
            'address' => 'Praça Floriano, s/n - Centro'
        ]);

        App\Place::create([
            'name' => 'Quinta da Boa Vista',
            'description' => 'A Quinta da Boa Vista é um parque municipal no Bairro Imperial de São Cristóvão, 
            localizado na Zona Norte da cidade do Rio de Janeiro, Brasil. Constitui-se atualmente em um complexo 
            paisagístico público de grande valor histórico. Nas dependências da Quinta localiza-se o Museu Nacional 
            de Arqueologia e Antropologia',
            'address' => 'Avenida Pedro II, s/n - São Cristóvão'
        ]);

        App\Place::create([
            'name' => 'Maracanã',
            'description' => 'O Estádio Jornalista Mário Filho, mais conhecido como Maracanã, ou ainda Maraca, 
            é um estádio de futebol localizado na Zona Norte da cidade, foi palco de grandes momentos do futebol 
            brasileiro e mundial',
            'address' => 'Avenida Presidente Castelo Branco, Portão 3 - Maracanã'
        ]);

        App\Place::create([
            'name' => 'Igreja da Penha',
            'description' => 'A Basílica Santuário de Nossa Senhora da Penha de França, popularmente conhecida como 
            Igreja da Penha é um tradicional santuário católico localizado no bairro da Penha.            
            Erguida no alto de uma pedra, é famosa pelos 382 degraus da escadaria principal, 
            onde muitos fiéis pagam promessas, subindo a pé ou de joelhos.',
            'address' => 'Largo da Penha, 19 - Penha'
        ]);

        App\Place::create([
            'name' => 'Parque Madureira',
            'description' => 'Parque Madureira é um parque de 450 mil metros quadrados, inaugurado em 23 de junho 
            de 2012 e ampliado em 2015, situado entre os bairros de Madureira e Guadalupe. 
            É o terceiro maior parque da cidade.',
            'address' => 'Rua Soares Caldeira, 115 - Madureira'
        ]);

        App\Place::create([
            'name' => 'Cidade das Artes',
            'description' => 'A Cidade das Artes é um complexo cultural localizado no coração da Barra da Tijuca. 
            Inaugurada em 2013, tem uma das maiores salas de concertos existentes no Brasil.',
            'address' => 'Avenida das Américas, 5300 - Barra da Tijuca'
        ]);

    }
}
