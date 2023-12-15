<template>
  <div :class="$style.adminTambahUser">
    <header :class="$style.header">
      <div :class="$style.headerChild" />
      <div :class="$style.sidebar">
        <img :class="$style.sidebarChild" alt="" src="/rectangle-24.svg" />
        <div :class="$style.profile">
          <div :class="$style.suikaParent">
            <b :class="$style.suika">SUIKA</b>
            <div :class="$style.admin">Admin</div>
            <div :class="$style.pexelsPhoto23790041" />
            <img :class="$style.eiuserIcon" alt="" src="/eiuser1.svg" />
          </div>
        </div>
        <div :class="$style.navigationParent">
          <div :class="$style.navigation">
            <div :class="$style.title">
              <div :class="$style.overline">Main</div>
            </div>
            <div :class="$style.link" @click="onLinkContainerClick">
              <img
                :class="$style.iconHomeSimpleDoor"
                alt=""
                src="/icon--homesimpledoor.svg"
              />
              <div :class="$style.label">Dashboard</div>
            </div>
            <div :class="$style.link" @click="onLinkContainer1Click">
              <img
                :class="$style.materialSymbolspersonSearchIcon"
                alt=""
                src="/materialsymbolspersonsearch.svg"
              />
              <div :class="$style.label">History</div>
            </div>
            <div :class="$style.dropdown" @click="onDropdownContainerClick">
              <div :class="$style.link2">
                <img
                  :class="$style.iconHomeSimpleDoor"
                  alt=""
                  src="/icon--reports.svg"
                />
                <div :class="$style.label">Master Data</div>
              </div>
            </div>
            <div :class="$style.link" @click="onLinkContainer3Click">
              <img
                :class="$style.iconHomeSimpleDoor"
                alt=""
                src="/icon--page.svg"
              />
              <div :class="$style.label">Peminjaman</div>
            </div>
            <div :class="$style.dropdown1">
              <div :class="$style.link2">
                <img
                  :class="$style.iconHomeSimpleDoor"
                  alt=""
                  src="/icon--user-1.svg"
                />
                <div :class="$style.label">Account</div>
                <img
                  :class="$style.iconChevron"
                  alt=""
                  src="/icon--chevron.svg"
                />
              </div>
              <div :class="$style.linksContainer">
                <div :class="$style.link5">
                  <div :class="$style.label5" @click="onLabelText5Click">
                    <ul :class="$style.user">
                      User
                    </ul>
                  </div>
                </div>
                <div :class="$style.link6" @click="onLinkContainer6Click">
                  <div :class="$style.label6">
                    <ul :class="$style.user">
                      Edit Profile
                    </ul>
                  </div>
                </div>
                <div :class="$style.line" />
              </div>
            </div>
          </div>
          <img :class="$style.signOutAlt1Icon" alt="" src="/signoutalt-1.svg" />
          <div :class="$style.logout" @click="onLogoutTextClick">Logout</div>
        </div>
        <div :class="$style.rectangleParent">
          <div :class="$style.frameChild" />
          <div :class="$style.admin1">ADMIN</div>
          <img
            :class="$style.logoSuikaTransformedPrevUiIcon"
            alt=""
            src="/logo-suikatransformed-prev-ui-1@2x.png"
          />
        </div>
      </div>
    </header>
    <img :class="$style.adminTambahUserChild" alt="" src="/rectangle-173.svg" />
    <div :class="$style.adminTambahUserItem" />
    <div :class="$style.adminTambahUserInner" />
    <div :class="$style.idUser">Id User</div>
    <div :class="$style.username">Username</div>
    <div :class="$style.rectangleGroup">
      <div :class="$style.groupChild" />
      <div :class="$style.nama">Nama</div>
    </div>
    <div :class="$style.rectangleDiv" />
    <div :class="$style.tambah" @click="onTambahTextClick">Tambah</div>
    <div :class="$style.groupDiv">
      <div :class="$style.rectangleContainer">
        <div :class="$style.groupItem" />
        <div :class="$style.nama">Password</div>
      </div>
    </div>
    <div :class="$style.adminTambahUserInner1">
      <div :class="$style.rectangleParent1">
        <div :class="$style.groupChild" />
        <div :class="$style.nama">Role</div>
        <img :class="$style.groupIcon" alt="" src="/group-2063.svg" />
      </div>
    </div>
    <div :class="$style.pilihAdminuser">-- Pilih Admin/User--</div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "AdminTambahUser",
    methods: {
      onLinkContainerClick() {
        this.$router.push("/admin-halaman-admin");
      },
      onLinkContainer1Click() {
        this.$router.push("/admin-data-history");
      },
      onDropdownContainerClick() {
        this.$router.push("/admin-data-inventory");
      },
      onLinkContainer3Click() {
        this.$router.push("/admin-data-peminjaman");
      },
      onLabelText5Click() {
        this.$router.push("/admin-data-user");
      },
      onLinkContainer6Click() {
        this.$router.push("/admin-update-admin");
      },
      onLogoutTextClick() {
        this.$router.push("/");
      },
      onTambahTextClick() {
        this.$router.push("/admin-data-user");
      },
    },
  });
</script>
<style module>
  .headerChild {
    position: absolute;
    top: 8px;
    left: 270px;
    background-color: var(--color-orange);
    width: 1170px;
    height: 68px;
  }
  .sidebarChild {
    position: absolute;
    top: 10px;
    left: 0px;
    width: 277px;
    height: 1026px;
  }
  .suika {
    position: absolute;
    height: 11.41%;
    width: 34.16%;
    top: 86.45%;
    left: 32.92%;
    display: inline-block;
  }
  .admin {
    position: absolute;
    top: 190.8px;
    left: 53px;
    font-size: var(--base-body-size);
    font-weight: 500;
    color: var(--color-gold);
    display: inline-block;
    width: 48px;
    height: 19.4px;
  }
  .pexelsPhoto23790041 {
    position: absolute;
    top: -19.4px;
    left: 10px;
    border-radius: var(--br-20xl);
    background-color: var(--color-gold);
    width: 151px;
    height: 187.4px;
  }
  .eiuserIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 161px;
    height: 168px;
    overflow: hidden;
  }
  .suikaParent {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
  }
  .profile {
    position: absolute;
    height: 20.3%;
    width: 58.12%;
    top: 9.56%;
    right: 25.99%;
    bottom: 70.14%;
    left: 15.88%;
  }
  .overline {
    flex: 1;
    position: relative;
    letter-spacing: 0.4px;
    line-height: 12px;
    text-transform: uppercase;
    font-weight: 500;
  }
  .title {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xs);
  }
  .iconHomeSimpleDoor {
    position: relative;
    width: 20px;
    height: 20px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .label {
    flex: 1;
    position: relative;
    letter-spacing: -0.02em;
    line-height: 20px;
    font-weight: 500;
  }
  .link {
    align-self: stretch;
    border-radius: var(--br-5xs);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-3xs) var(--padding-xs);
    gap: var(--gap-xs);
    cursor: pointer;
  }
  .materialSymbolspersonSearchIcon {
    position: relative;
    width: 20px;
    height: 21px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .link2 {
    align-self: stretch;
    border-radius: var(--br-5xs);
    background-color: var(--color-gold);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-3xs) var(--padding-xs);
    gap: var(--gap-xs);
  }
  .dropdown {
    align-self: stretch;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    cursor: pointer;
  }
  .iconChevron {
    position: relative;
    width: 16px;
    height: 16px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .user {
    margin: 0;
    padding-left: var(--padding-base);
  }
  .label5 {
    flex: 1;
    position: relative;
    letter-spacing: -0.02em;
    line-height: 16px;
    font-weight: 500;
    cursor: pointer;
  }
  .link5 {
    align-self: stretch;
    border-radius: var(--br-5xs);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-5xs) var(--padding-xs);
    z-index: 0;
  }
  .label6 {
    flex: 1;
    position: relative;
    letter-spacing: -0.02em;
    line-height: 16px;
    font-weight: 500;
  }
  .link6 {
    align-self: stretch;
    border-radius: var(--br-5xs);
    background-color: var(--color-gold);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-5xs) var(--padding-xs);
    cursor: pointer;
    z-index: 1;
  }
  .line {
    align-self: stretch;
    position: absolute;
    margin: 0 !important;
    height: 100%;
    top: 0%;
    bottom: 0%;
    left: -13px;
    background-color: var(--color-gainsboro-200);
    z-index: 2;
  }
  .linksContainer {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    gap: var(--gap-9xs);
    font-size: var(--font-inherit);
    font-family: var(--font-inherit);
  }
  .dropdown1 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-xs);
  }
  .navigation {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 256px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xl) var(--padding-5xl) 0px;
    box-sizing: border-box;
    gap: var(--gap-5xs);
  }
  .signOutAlt1Icon {
    position: absolute;
    top: 483.6px;
    left: 130px;
    width: 17px;
    height: 15.6px;
    overflow: hidden;
  }
  .logout {
    position: absolute;
    top: 481.8px;
    left: 56px;
    font-weight: 500;
    font-family: var(--font-montserrat);
    display: inline-block;
    width: 51px;
    height: 15.6px;
    cursor: pointer;
  }
  .navigationParent {
    position: absolute;
    top: 309px;
    left: 7px;
    width: 256px;
    height: 499.2px;
    font-size: var(--base-body-size);
    font-family: var(--font-inter);
  }
  .frameChild {
    position: absolute;
    top: 8px;
    left: 4px;
    background-color: var(--color-orange);
    border-right: 1px solid var(--color-gainsboro-100);
    border-bottom: 1px solid var(--color-gainsboro-100);
    box-sizing: border-box;
    width: 273px;
    height: 68.8px;
  }
  .admin1 {
    position: absolute;
    top: 27.5px;
    left: 91px;
    font-weight: 800;
    display: inline-block;
    width: 77.8px;
    height: 32.1px;
  }
  .logoSuikaTransformedPrevUiIcon {
    position: absolute;
    top: 10px;
    left: 0px;
    border-radius: var(--br-123xl);
    width: 88px;
    height: 83.7px;
    object-fit: cover;
  }
  .rectangleParent {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 277px;
    height: 83.7px;
    font-size: var(--font-size-5xl);
    font-family: var(--base-base-primary-bold);
  }
  .sidebar {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 277px;
    height: 1036px;
  }
  .header {
    position: absolute;
    top: -10px;
    left: 0px;
    width: 1440px;
    height: 1036px;
    text-align: left;
    font-size: var(--font-size-mid);
    color: var(--color-black);
    font-family: var(--font-montserrat);
  }
  .adminTambahUserChild {
    position: absolute;
    top: 115px;
    left: 348px;
    border-radius: var(--br-xl);
    width: 1013px;
    height: 729px;
  }
  .adminTambahUserItem {
    position: absolute;
    top: 185px;
    left: 488px;
    border-radius: var(--br-xl);
    background-color: var(--light-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 701px;
    height: 56px;
  }
  .adminTambahUserInner {
    position: absolute;
    top: 302px;
    left: 488px;
    border-radius: var(--br-xl);
    background-color: var(--light-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 701px;
    height: 54px;
  }
  .idUser {
    position: absolute;
    top: 144px;
    left: 488px;
    font-weight: 500;
    display: inline-block;
    width: 392px;
  }
  .username {
    position: absolute;
    top: 261px;
    left: 488px;
    font-weight: 500;
    display: inline-block;
    width: 392px;
  }
  .groupChild {
    position: absolute;
    top: 35px;
    left: 0px;
    border-radius: var(--br-xl);
    background-color: var(--light-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 701px;
    height: 60px;
  }
  .nama {
    position: absolute;
    top: 0px;
    left: 0px;
    font-weight: 500;
    display: inline-block;
    width: 277px;
  }
  .rectangleGroup {
    position: absolute;
    top: 380px;
    left: 488px;
    width: 701px;
    height: 95px;
  }
  .rectangleDiv {
    position: absolute;
    top: 753px;
    left: 668px;
    border-radius: var(--br-xl);
    background-color: var(--color-red-100);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 300px;
    height: 59px;
  }
  .tambah {
    position: absolute;
    top: 769px;
    left: 673px;
    font-size: var(--font-size-5xl);
    font-weight: 500;
    color: var(--color-whitesmoke-100);
    text-align: center;
    display: inline-block;
    width: 295px;
    height: 27px;
    cursor: pointer;
  }
  .groupItem {
    position: absolute;
    top: 37px;
    left: 0px;
    border-radius: var(--br-xl);
    background-color: var(--light-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 701px;
    height: 60px;
  }
  .rectangleContainer {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 701px;
    height: 97px;
  }
  .groupDiv {
    position: absolute;
    top: 506px;
    left: 488px;
    width: 701px;
    height: 97px;
  }
  .groupIcon {
    position: absolute;
    top: 55px;
    right: 23px;
    width: 27px;
    height: 25px;
  }
  .rectangleParent1 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 701px;
    height: 95px;
  }
  .adminTambahUserInner1 {
    position: absolute;
    top: 627px;
    left: 488px;
    width: 701px;
    height: 95px;
  }
  .pilihAdminuser {
    position: absolute;
    top: 682px;
    left: 529px;
    font-size: var(--base-large-size);
    display: inline-block;
    width: 277px;
  }
  .adminTambahUser {
    position: relative;
    background-color: var(--light-white);
    width: 100%;
    height: 1024px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--color-black);
    font-family: var(--base-base-primary-bold);
  }
</style>
