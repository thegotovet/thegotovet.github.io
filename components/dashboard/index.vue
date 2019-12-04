<template>
    <div>
        <div class="row my-3" id="summary">
            <div class="col-md-3">
                <div class="card shadow-sm p-3">
                    <h6 class="w-100">Total Visits</h6>
                    <div class="d-flex justify-content-between align-items-center mt-2">
                        <i class="ti-bar-chart first"></i>
                        <span>+10%</span>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card shadow-sm p-3">
                    <h6 class="w-100">Total Visits</h6>
                    <div class="d-flex justify-content-between align-items-center mt-2">
                        <i class="ti-bar-chart second"></i>
                        <span>+10%</span>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card shadow-sm p-3">
                    <h6 class="w-100">Total Visits</h6>
                    <div class="d-flex justify-content-between align-items-center mt-2">
                        <i class="ti-bar-chart third"></i>
                        <span>+10%</span>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card shadow-sm p-3">
                    <h6 class="w-100">Total Visits</h6>
                    <div class="d-flex justify-content-between align-items-center mt-2">
                        <i class="ti-bar-chart fourth"></i>
                        <span>+10%</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <!-- Vector maps -->
            <div class="col-md-8">
                <div id="world-map-marker"></div>
            </div>
            <div class="col-md-4 pl-0">
                <div id="visits" class="card shadow-sm py-2 px-4 h-100">
                    <div class="my-2">
                        <h6 class="w-100 mb-2 text-muted">100k</h6>
                        <div class="d-flex justify-content-between my-3">
                            <span>Visitors from USA</span> <span class="text-muted">50%</span>
                        </div>
                        <div class="progress" style="height: 3px">
                            <div class="progress-bar" role="progressbar" style="width: 50%; background-color:#4DB051" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="my-2">
                        <h6 class="w-100 mb-2 text-muted">1M</h6>
                        <div class="d-flex justify-content-between my-3">
                            <span>Visitors from Europe</span> <span class="text-muted">80%</span>
                        </div>
                        <div class="progress" style="height: 3px">
                            <div class="progress-bar" role="progressbar" style="width: 80%; background-color:#BE72CB" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="my-2">
                        <h6 class="w-100 mb-2 text-muted">450k</h6>
                        <div class="d-flex justify-content-between my-3">
                            <span>Visitors from USA</span> <span class="text-muted">40%</span>
                        </div>
                        <div class="progress" style="height: 3px">
                            <div class="progress-bar" role="progressbar" style="width: 40%; background-color:#F76A61" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="my-2">
                        <h6 class="w-100 mb-2 text-muted">1B</h6>
                        <div class="d-flex justify-content-between my-3">
                            <span>Visitors from USA</span> <span class="text-muted">90%</span>
                        </div>
                        <div class="progress" style="height: 3px">
                            <div class="progress-bar" role="progressbar" style="width: 90%; background-color:#82C4F8" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { debounce } from "lodash";
    import { vectorMapInit } from '@/static/assets/js/vectorMap';
    export default {
        mounted() {
            vectorMapInit();
            $(window).resize(debounce(vectorMapInit, 150));
        },
    }
</script>

<style>
    h6{
        font-family: 'Barlow Condensed', sans-serif;
        letter-spacing: 0.5px;
        font-size: 0.975rem;
        font-weight: 500;
    }

    i{
        font-size: 20px;
    }
    #summary span{
        font-size: 14px;
        font-weight: bold;
    }
    .first{
        color: #6AF570;
    }
    .first + span{
        padding: 5px 20px;
        border-radius: 50em;
        background-color: #E8F5E9;
        color: #4DB051;
    }
    .second{
        color: #D2A4FF;
    }
    .second + span{
        padding: 5px 20px;
        border-radius: 50em;
        background-color: #FFEBEE;
        color: #F76A61;
    }
    .third{
        color: #04EDFF;
    }
    .third + span{
        padding: 5px 20px;
        border-radius: 50em;
        background-color: #F3E5F5;
        color: #BE72CB;
    }
    .fourth{
        color: #F96262;
    }
    .fourth + span{
        padding: 5px 20px;
        border-radius: 50em;
        background-color: #E3F2FD;
        color: #82C4F8;
    }

    #visits h6{
        font-size: 20px;
    }
    #visits span{
        font-size: 11px;
    }
</style>