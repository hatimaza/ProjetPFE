<template>
    <div class="container">
      <section class="content-header">
      <h1>
        Liste des collaborateurs
       
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li><a href="#">Mes equipes</a></li>
       
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Mes equipe</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table id="example2" class="table table-bordered table-hover">
                <thead>
                <tr>
                  <th>Code </th>
                  <th>Nom et  prenom </th>
                  <th>specialité</th>
                  <th>telephone</th>
                  <th>email</th>
                  <th>Détails</th> 
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>CC123</td>
                  <td>Hatim Aza
                  </td>
                  <td>Developpeur en PHP </td>
                  <td>0622414160</td>
                  <td>hatim.aza@gmail.com</td>
                  <td><router-link to="/DetailCollaborateur" class="btn btn-primary">Détail</router-link></td>
                </tr>
                <tr>
                    <td>CC123</td>
                    <td>Ali habjia
                    </td>
                    <td>Front end en react </td>
                    <td>0622414160</td>
                    <td>ali.habjia@gmail.com</td>
                    <td><a href="detailcollaborateur.html" class="btn btn-primary">Détail</a></td>
                </tr>
                <tr>
                    <td>CC123</td>
                    <td>Mehdi laarej
                    </td>
                    <td>Developpeur en c#</td>
                    <td>0622414160</td>
                    <td>Mehdi.laarej@gmail.com</td>
                    <td><a href="detailcollaborateur.html" class="btn btn-primary">Détail</a></td>
                </tr>
                <tr>
                    <td>CC123</td>
                    <td>Aymane bohdou
                    </td>
                    <td>Developpeur en PHP</td>
                    <td>0622414160</td>
                    <td>Aymane.bouhadou@gmail.com</td>
                    <td><a href="detailcollaborateur.html" class="btn btn-primary">Détail</a></td>
                </tr>
                
                </tbody>
              </table>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->


          <!-- /.box -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
