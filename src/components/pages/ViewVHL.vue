<template>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="10">
        <v-card elevation="0" class="pa-4 d-flex flex-column align-center surface mt-5">
          <v-card-text>
            <q-r-input @qr-code-parsed="handleQRCodeParsed"></q-r-input>
          </v-card-text>
          <v-card-text>
            <v-text-field
              v-model="password"
              :label="$t('vhl.view.passcode_label')"
              class="pl-2"
              outlined
              type="password"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn 
            :loading="loading"
            color="primary"
            class="on-primary--text"
            :disabled="!img"
            rounded
            width="10rem"
            >{{ $t('vhl.view.verify_button') }}
            </v-btn>
          </v-card-actions>
          
        </v-card>
      </v-col>
    </v-row>
  </template>
<script>
import QRInput from '../utils/QRInput'
export default {
        components: {QRInput},
        name: "ViewVHL",
        data(){
            return{
            loading: false,
            results: [],
            searched: false,
            img: false,
            qrCode: "",
            password: "",
            ips: "",
            name: "",
            identifier: "",
            country: "",
            error: "",

          };
          },
      mounted() {
      },
      methods: {
          handleQRCodeParsed(data){
              if (data){
                  this.qrCode = data.data;
                  this.img = true;
              }
          },
      }
};
</script>

<style>
  .styled-table {
    border-collapse: collapse;
    border: 1px solid rgba(44, 137, 236, 0.3);
  }
  .styled-table th,
  .styled-table td {
    padding: 12px;
    border: 1px solid rgba(44, 137, 236, 0.3);
    text-align: center !important;
    
  }
  .link-column {
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .row-odd {
    background-color: rgb(30, 133, 241, 0.3);
  }
</style>