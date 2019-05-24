<template>
    <div class="container">
        <section class="content-header">
      <h1>
        Gestion des taches

      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li><a href="Addtache.html">Gestion des taches</a></li>

      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Ajouter une tache </h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table id="example2" class="table table-responsive">
                <thead>
                <tr>
                
                  <th>Backlog</th>
                  <th>Nom de la tache</th>
                  <th>Description de la tache</th>
                  <th>Date debut</th>
                  <th>Date fin éstimé</th>              
                  <th>Prix par heure</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  
                  <td>Backlog</td>
                  <td>Tache1</td>
                  <td>Description 1 .... </td>
                  <td>10/4/2019</td>
                  <td>15/4/2019</td>
                  <td>100</td>
                  <td>not start</td>
                  
                </tr>

                <tr>
                  
                  <td>Backlog</td>
                  <td>Tache1</td>
                  <td>Description 1 .... </td>
                  <td>10/4/2019</td>
                  <td>14/4/2019</td>
                  <td>100</td>
                  <td>not start</td>
                  
                </tr>

                <tr>
                  
                  <td><select class="form-control">
                  <option>backlog1</option> <option>backlog2</option>  <option>backlog3</option>   
                  </select>
                  </td>
                  <td><input type="text" placeholder="nom de la tache..." class="form-control"></td>
                  <td><textarea  class="form-control" rows="5"></textarea></td>
                  <td><input type="date"  class="form-control"></td>
                  <td><input type="date"  class="form-control"></td>
                  <td><input type="text" placeholder="prix parheure" class="form-control"></td>     
                  <td> </td>             
                  <td><a href="#" class="btn btn-primary"><i class="fa fa-plus"></i> tache </a><br>
                      <a href="Addsoustache.html" class="btn btn-primary"><i class="fa fa-plus"></i> sous tache </a>
                  </td>
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
