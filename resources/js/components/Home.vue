<template>
    <div class="container">
        <section class="content-header">
      <h1>
        Home

      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-home"></i> Home</a></li>

      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <!-- Small boxes (Stat box) -->
      <div class="row">
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-aqua">
            <div class="inner">
              <h3>10</h3>
              <p>Nombre de mes projets</p>
            </div>
            <div class="icon">
              <i class="fa fa-folder"></i>
            </div>
            <router-link to="/MesProjets" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></router-link>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-green">
            <div class="inner">
              <h3>20</h3>
              <p>Nombre de mes sous taches</p>
            </div>
            <div class="icon">
              <i class="fa fa-tasks"></i>
            </div>
            <router-link to="/MessousTaches" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></router-link>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-yellow">
            <div class="inner">
              <h3>10</h3>
              <p>Nombre des tickets</p>
            </div>
            <div class="icon">
              <i class="fa fa-ticket"></i>
            </div>
            <router-link to="/Listetickets" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></router-link>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-red">
            <div class="inner">
              <h3>5</h3>

              <p>Mes equipes</p>
            </div>
            <div class="icon">
              <i class="fa fa-user"></i>
            </div>
            <router-link to="/MesEquipes" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></router-link>
          </div>
        </div>
        <!-- ./col -->
      </div>
      <!-- /.row -->
      <!-- Main row -->
      <div class="row">
          <div class="box box-solid bg-green-gradient">
              <div class="box-header">
                <i class="fa fa-calendar"></i>
  
                <h3 class="box-title">Calendrier</h3>
                <!-- tools box -->
                <div class="pull-right box-tools">
                  <!-- button with a dropdown -->
                  <div class="btn-group">
                    <button type="button" class="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown">
                      <i class="fa fa-bars"></i></button>
                   
                  </div>
                  <button type="button" class="btn btn-success btn-sm" data-widget="collapse"><i class="fa fa-minus"></i>
                  </button>
                  <button type="button" class="btn btn-success btn-sm" data-widget="remove"><i class="fa fa-times"></i>
                  </button>
                </div>
                <!-- /. tools -->
              </div>
              <!-- /.box-header -->
              <div class="box-body no-padding">
                <!--The calendar -->
                <div id="calendar" style="width: 100%"></div>
              </div>
              <!-- /.box-body -->
              <div class="box-footer text-black">
                  <div class="row">
                      <div class="col-md-12">
                        <h3 style="text-align: center;">Les grandes taches de mon projet Actuel  </h3>
                        <hr>
                      </div>
                  </div>
                  <div class="row">
                  <div class="col-sm-6">
                    <!-- Progress bars -->
                   <div class="clearfix">
                      <span class="pull-left">Tache #1</span>
                      <small class="pull-right">90%</small>
                    </div>
                    <div class="progress xs">
                      <div class="progress-bar progress-bar-green" style="width: 90%;"></div>
                    </div>
  
                    <div class="clearfix">
                      <span class="pull-left">Tache #2</span>
                      <small class="pull-right">50%</small>
                    </div>
                    <div class="progress xs">
                      <div class="progress-bar progress-bar-orange" style="width: 50%;"></div>
                    </div>
                  </div>
                  <!-- /.col -->
                  <div class="col-sm-6">
                    <div class="clearfix">
                      <span class="pull-left">Tache #3</span>
                      <small class="pull-right">50%</small>
                    </div>
                    <div class="progress xs">
                      <div class="progress-bar progress-bar-orange" style="width: 50%;"></div>
                    </div>
  
                    <div class="clearfix">
                      <span class="pull-left">Tache #4</span>
                      <small class="pull-right">30%</small>
                    </div>
                    <div class="progress xs">
                      <div class="progress-bar progress-bar-red" style="width: 30%;"></div>
                    </div>
                  </div>
                  <!-- /.col -->
                </div>
                <!-- /.row -->
              </div>
            </div>
       
      </div>
      <!-- /.row (main row) -->

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
