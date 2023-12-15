<template>
  <div :class="$style.userUpdateAdmin">
    <div :class="$style.sidebar">
      <img :class="$style.sidebarChild" alt="" src="/rectangle-2.svg" />
      <div :class="$style.suikaParent">
        <b :class="$style.suika">USER</b>
        <div :class="$style.admin">Admin</div>
        <div :class="$style.pexelsPhoto23790041" />
        <img :class="$style.eiuserIcon" alt="" src="/eiuser.svg" />
      </div>
      <div :class="$style.navigationParent">
        <div :class="$style.navigation">
          <div :class="$style.title">
            <div :class="$style.overline">Main</div>
          </div>
          <div :class="$style.link">
            <img
              :class="$style.iconHomeSimpleDoor"
              alt=""
              src="/icon--homesimpledoor.svg"
            />
            <div :class="$style.label" @click="onLabelTextClick">Dashboard</div>
          </div>
          <div :class="$style.link">
            <img
              :class="$style.materialSymbolspersonSearchIcon"
              alt=""
              src="/materialsymbolspersonsearch.svg"
            />
            <div :class="$style.label" @click="onLabelText1Click">History</div>
          </div>
          <div :class="$style.link">
            <img
              :class="$style.iconHomeSimpleDoor"
              alt=""
              src="/icon--page.svg"
            />
            <div :class="$style.label" @click="onLabelText2Click">
              Peminjaman
            </div>
          </div>
          <div :class="$style.dropdown">
            <div :class="$style.link3">
              <img
                :class="$style.iconHomeSimpleDoor"
                alt=""
                src="/icon--user-1.svg"
              />
              <div :class="$style.label" @click="onLabelText3Click">
                Account
              </div>
            </div>
          </div>
        </div>
        <img :class="$style.signOutAlt1Icon" alt="" src="/signoutalt-1.svg" />
        <div :class="$style.logout">Logout</div>
      </div>
    </div>
    <div :class="$style.header">
      <div :class="$style.headerChild" />
    </div>
    <div :class="$style.rectangleParent">
      <div :class="$style.groupChild" />
      <div :class="$style.user">User</div>
      <img
        :class="$style.logoSuikaTransformedPrevUiIcon"
        alt=""
        src="/logo-suikatransformed-prev-ui-1@2x.png"
      />
    </div>
    <div :class="$style.userUpdateAdminChild" />
    <div :class="$style.updateProfile">Update Profile</div>
    <div :class="$style.userUpdateAdminItem" />
    <div :class="$style.userUpdateAdminInner" />
    <div :class="$style.rectangleDiv" />
    <div :class="$style.userUpdateAdminChild1" />
    <div :class="$style.nama">Nama</div>
    <div :class="$style.username">Username</div>
    <div :class="$style.password">Password</div>
    <div :class="$style.userUpdateAdminChild2" />
    <div :class="$style.update" @click="onUpdateTextClick">Update</div>
    <div :class="$style.userUpdateAdminChild3" />
    <div :class="$style.pasFoto">Pas Foto</div>
    <div :class="$style.chooseFile">Choose file</div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UserUpdateAdmin",
    methods: {
      onLabelTextClick() {
        this.$router.push("/");
      },
      onLabelText1Click() {
        this.$router.push("/user-data-history");
      },
      onLabelText2Click() {
        this.$router.push("/user-data-peminjaman");
      },
      onLabelText3Click() {
        this.$router.push("/user-profile");
      },
      onUpdateTextClick() {
        this.$router.push("/user-profile");
      },
    },
  });
</script>
<style module>
  .sidebarChild {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 270px;
    height: 1032px;
  }
  .suika {
    position: absolute;
    height: 11.3%;
    width: 34.16%;
    top: 88.7%;
    left: 32.92%;
    display: inline-block;
  }
  .admin {
    position: absolute;
    top: 189.5px;
    left: 53px;
    font-size: var(--base-body-size);
    font-weight: 500;
    color: var(--color-gold);
    display: inline-block;
    width: 48px;
    height: 19.3px;
  }
  .pexelsPhoto23790041 {
    position: absolute;
    top: -19.8px;
    left: 10px;
    border-radius: var(--br-20xl);
    background-color: var(--color-gold);
    width: 151px;
    height: 186.5px;
  }
  .eiuserIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 161px;
    height: 152px;
    overflow: hidden;
  }
  .suikaParent {
    position: absolute;
    height: 20.71%;
    width: 59.63%;
    top: 8.72%;
    right: 24.07%;
    bottom: 70.57%;
    left: 16.3%;
  }
  .overline {
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
    cursor: pointer;
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
  }
  .materialSymbolspersonSearchIcon {
    position: relative;
    width: 20px;
    height: 21px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .link3 {
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
    height: 156px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
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
    top: 364.8px;
    left: 120px;
    width: 17px;
    height: 15.6px;
    overflow: hidden;
  }
  .logout {
    position: absolute;
    top: 363px;
    left: 46px;
    font-weight: 500;
    font-family: var(--font-montserrat);
    display: inline-block;
    width: 51px;
    height: 15.6px;
  }
  .navigationParent {
    position: absolute;
    top: 298px;
    left: 7px;
    width: 256px;
    height: 400px;
    font-size: var(--base-body-size);
    font-family: var(--font-inter);
  }
  .sidebar {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 270px;
    height: 1021px;
    font-size: var(--font-size-mid);
    font-family: var(--font-montserrat);
  }
  .headerChild {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--color-orange);
    width: 1170px;
    height: 68px;
  }
  .header {
    position: absolute;
    top: -2px;
    left: 270px;
    width: 1170px;
    height: 68px;
  }
  .groupChild {
    position: absolute;
    top: 0px;
    left: 4px;
    background-color: var(--color-orange);
    border-right: 1px solid var(--color-gainsboro-100);
    border-bottom: 1px solid var(--color-gainsboro-100);
    box-sizing: border-box;
    width: 270px;
    height: 66px;
  }
  .user {
    position: absolute;
    top: 21.7px;
    left: 90px;
    font-weight: 800;
    display: inline-block;
    width: 77px;
    height: 25.3px;
  }
  .logoSuikaTransformedPrevUiIcon {
    position: absolute;
    top: 0px;
    left: 4px;
    border-radius: var(--br-123xl);
    width: 87px;
    height: 66px;
    object-fit: cover;
  }
  .rectangleParent {
    position: absolute;
    top: 0px;
    left: -4px;
    width: 274px;
    height: 66px;
    font-size: var(--font-size-5xl);
  }
  .userUpdateAdminChild {
    position: absolute;
    top: 124px;
    left: 298px;
    border-radius: var(--br-xl);
    background-color: var(--color-goldenrod);
    width: 1075px;
    height: 68px;
  }
  .updateProfile {
    position: absolute;
    top: 138px;
    left: 333px;
    font-size: var(--font-size-17xl);
    font-weight: 500;
    display: inline-block;
    width: 392px;
  }
  .userUpdateAdminItem {
    position: absolute;
    top: 237px;
    left: 411px;
    border-radius: var(--br-xl);
    background-color: var(--light-white);
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    width: 849px;
    height: 537px;
  }
  .userUpdateAdminInner {
    position: absolute;
    top: 304px;
    left: 420px;
    border-radius: var(--br-xl);
    background-color: var(--light-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 806px;
    height: 41px;
  }
  .rectangleDiv {
    position: absolute;
    top: 399px;
    left: 420px;
    border-radius: var(--br-xl);
    background-color: var(--light-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 806px;
    height: 39px;
  }
  .userUpdateAdminChild1 {
    position: absolute;
    top: 496px;
    left: 420px;
    border-radius: var(--br-xl);
    background-color: var(--light-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 806px;
    height: 44px;
  }
  .nama {
    position: absolute;
    top: 275px;
    left: 445px;
    font-weight: 500;
    display: inline-block;
    width: 319px;
    height: 17px;
  }
  .username {
    position: absolute;
    top: 371px;
    left: 445px;
    font-weight: 500;
    display: inline-block;
    width: 319px;
    height: 17px;
  }
  .password {
    position: absolute;
    top: 469px;
    left: 445px;
    font-weight: 500;
    display: inline-block;
    width: 319px;
    height: 17px;
  }
  .userUpdateAdminChild2 {
    position: absolute;
    top: 696px;
    left: 714px;
    border-radius: var(--br-xl);
    background-color: #ff0000;
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 243px;
    height: 45px;
  }
  .update {
    position: absolute;
    top: 708px;
    left: 807px;
    font-size: var(--font-size-5xl);
    font-weight: 500;
    color: var(--color-whitesmoke-100);
    display: inline-block;
    width: 115px;
    height: 21px;
    cursor: pointer;
  }
  .userUpdateAdminChild3 {
    position: absolute;
    top: 587px;
    left: 420px;
    border-radius: var(--br-xl);
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 300px;
    height: 60px;
  }
  .pasFoto {
    position: absolute;
    top: 550px;
    left: 451px;
    font-weight: 500;
    display: inline-block;
    width: 392px;
  }
  .chooseFile {
    position: absolute;
    top: 605px;
    left: 519px;
    font-weight: 500;
    display: inline-block;
    width: 142px;
  }
  .userUpdateAdmin {
    position: relative;
    background-color: var(--light-white);
    width: 100%;
    height: 1024px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--color-black);
    font-family: var(--base-body-bold);
  }
</style>
