<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*Seeds de usuários*/
        App\User::create([
            'first_name' => 'Vincent',
            'last_name' => 'Cortez',
            'email' => 'cortes@mail.com',
            'password' => 'viz9765',
        ]);

        App\User::create([
            'first_name' => 'Trisha',
            'last_name' => 'Martin',
            'email' => 'trimar@mail.com',
            'password' => 'trina8294',
        ]);

        App\User::create([
            'first_name' => 'Evandro',
            'last_name' => 'Marini',
            'email' => 'marini@mail.com',
            'password' => 'sea2978',
        ]);

        App\User::create([
            'first_name' => 'Marta',
            'last_name' => 'Souza',
            'email' => 'martsouza@mail.com',
            'password' => 'mart29781',
        ]);

        App\User::create([
            'first_name' => 'Ayumi',
            'last_name' => 'Hikaru',
            'email' => 'ayumi@mail.com',
            'password' => 'ayhikaru675',
        ]);

        /*Seeds de guias*/
        App\User::create([
            'first_name' => 'Eduardo',
            'last_name' => 'Silveira',
            'email' => 'edu.silveira@mail.com',
            'password' => 'edusilv88',
            'description' => '29 anos, formado em História da Arte, guia especialista em museus e passeios culturais.',
            'is_guide' => true,
            'cpf' => '902.593.687-33',
            'phone_number' => '(21) 94515-7615',
            'cadastur' => '17.765.670/0001-00'
        ]);

        App\User::create([
            'first_name' => 'Luna',
            'last_name' => 'Andrade',
            'email' => 'luandra@mail.com',
            'password' => 'lulu9090',
            'description' => '22 anos, formada em Biologia, guia especialista em parques e trilhas.',
            'is_guide' => true,
            'cpf' => '811.650.587-40',
            'phone_number' => '(21) 95403-4915',
            'cadastur' => '16.065.570/0021-00'
        ]);

        App\User::create([
            'first_name' => 'Renata',
            'last_name' => 'Ivens',
            'email' => 'reivens@mail.com',
            'password' => 'riv785a',
            'description' => '28 anos, formada em Artes Cênicas, guia especialista em teatro e entretenimento.',
            'is_guide' => true,
            'cpf' => '643.094.407-70',
            'phone_number' => '(21) 90056-3392',
            'cadastur' => '10.705.670/0701-00'
        ]);

        App\User::create([
            'first_name' => 'Jorge',
            'last_name' => 'Romano',
            'email' => 'romano@mail.com',
            'password' => 'rome88',
            'description' => '32 anos, formado em Educação Física e Turismo, guia especialista em praias, trilhas e esportes.',
            'is_guide' => true,
            'cpf' => '918.291.547-45',
            'phone_number' => '(21) 93677-7296',
            'cadastur' => '14.215.370/2701-00'
        ]);

        App\User::create([
            'first_name' => 'Fernanda',
            'last_name' => 'Vianna',
            'email' => 'fevianna@mail.com',
            'password' => 'mynameisfe',
            'description' => '34 anos, formada em Turismo, guia especialista em História Carioca.',
            'is_guide' => true,
            'cpf' => '833.685.607-27',
            'phone_number' => '(21) 94068-9453',
            'cadastur' => '13.215.370/2601-00'
        ]);
    }
}
