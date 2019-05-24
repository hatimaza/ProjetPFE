<template>
    <div class="container">

    <section class="content-header">
      <h1>
        Liste des tickets

      </h1>
      <ol class="breadcrumb">
        <li><a href="index.html"><i class="fa fa-dashboard"></i> Home</a></li>
        <li><a href="Listetickets.html">Liste des tickets</a></li>
        <li><a href="#">Détail d'une ticket</a></li>

      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">

          <!-- /.box -->

          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Détail de la ticket : ticket1 </h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Code de la commentaire</th>
                  <th>Commentaire</th>
                  <th>Collaborateur</th>
                  <th>Date commentaire</th>
                  <th>Status de la ticket</th>
                  <th>Priorité de la ticket</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>ST123</td>
                  <td>Commentaire 1 .... </td>
                  <td>Hatim Aza</td>
                  <td>10/4/2019</td>
                  <td>fixed </td>
                
                  <td>normal</td>
                </tr>

               
                    <tr>
                        <td>ST123</td>
                        <td>Commentaire 2 .... </td>
                        <td>Hatim Aza</td>
                        <td>12/4/2019</td>
                        <td>refixed </td>
                        
                        <td>normal</td>
                      </tr>
                      <tr>
                          <td>ST123</td>
                          <td>Commentaire 3 .... </td>
                          <td>Hatim Aza</td>
                          <td>13/4/2019</td>
                          <td>refixed </td>
                       
                          <td>normal</td>
                        </tr>

                        <tr>
                            <td>ST123</td>
                            <td>Commentaire 4 .... </td>
                            <td>Hatim Aza</td>
                            <td>15/4/2019</td>
                            <td>refixed </td>
                       
                            <td>normal</td>
                        </tr> 
                          
                        <tr>
                              <td>ST123</td>
                              <td>Commentaire 1 .... </td>
                              <td>Ali Habjia</td>
                              <td>17/4/2019</td>
                              <td>refixed </td>
                        
                              <td>normal</td>
                        </tr> 
                        <tr>
                                <td>ST123</td>
                                <td>Commentaire 1 .... </td>
                                <td>ali HABJIA</td>
                                <td>20/4/2019</td>
                                <td>refixed </td>
                         
                                <td>normal</td>
                        </tr>
                
                </tbody>
              </table>
            </div>
            <!-- /.box-body -->
          </div>
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
