<template>
  <div :class="$style.userDataHistory">
    <div :class="$style.sidebar">
      <img :class="$style.sidebarChild" alt="" src="/rectangle-21.svg" />
      <div :class="$style.suikaParent">
        <b :class="$style.suika">USER</b>
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
    <div :class="$style.userDataHistoryChild" />
    <div :class="$style.userDataHistoryItem" />
    <div :class="$style.dataHistory">Data History</div>
    <div :class="$style.userAndLogo">
      <div :class="$style.userAndLogoChild" />
      <div :class="$style.user">User</div>
      <img
        :class="$style.logoSuikaTransformedPrevUiIcon"
        alt=""
        src="/logo-suikatransformed-prev-ui-12@2x.png"
      />
    </div>
    <div :class="$style.tableColumn">
      <div :class="$style.heading">
        <div :class="$style.headingChild" />
        <div :class="$style.headingItem" />
        <div :class="$style.idHistory">ID History</div>
        <img :class="$style.headingInner" alt="" src="/group-206.svg" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.div">101</div>
      </div>
      <div :class="$style.tableColumnChild" />
      <div :class="$style.titleValue">
        <div :class="$style.titleValueChild" />
        <div :class="$style.div">102</div>
        <div :class="$style.titleValueItem" />
      </div>
    </div>
    <div :class="$style.tableColumn1">
      <div :class="$style.heading">
        <div :class="$style.headingChild" />
        <div :class="$style.headingItem" />
        <div :class="$style.namaBarang">Nama Barang</div>
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.titleValueChild" />
        <div :class="$style.sonyAlphaA7">Sony Alpha A7 III</div>
        <div :class="$style.titleValueChild1" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.titleValueChild" />
        <div :class="$style.toyotaAvanza">Toyota Avanza</div>
        <div :class="$style.titleValueItem" />
      </div>
    </div>
    <div :class="$style.tableColumn2">
      <div :class="$style.heading2">
        <div :class="$style.headingChild" />
        <div :class="$style.dateStart">Date Start</div>
        <div :class="$style.lineDiv" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.dateValueChild" />
        <div :class="$style.desember2023">15 Desember 2023</div>
        <div :class="$style.dateValueItem" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.dateValueChild" />
        <div :class="$style.desember2023">10 Desember 2023</div>
        <div :class="$style.dateValueItem" />
      </div>
    </div>
    <div :class="$style.tableColumn3">
      <div :class="$style.heading2">
        <div :class="$style.headingChild" />
        <div :class="$style.headingItem" />
        <div :class="$style.dateEnd">Date End</div>
        <img :class="$style.groupIcon" alt="" src="/group-2061.svg" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.titleValueChild" />
        <div :class="$style.desember20232">18 Desember 2023</div>
        <div :class="$style.titleValueChild5" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.titleValueChild" />
        <div :class="$style.desember20233">12 Desember 2023</div>
        <div :class="$style.titleValueChild5" />
      </div>
    </div>
    <div :class="$style.tableColumn4">
      <div :class="$style.heading2">
        <div :class="$style.headingChild" />
        <div :class="$style.headingItem" />
        <div :class="$style.kondisi">Kondisi</div>
        <img :class="$style.groupIcon" alt="" src="/group-2061.svg" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.titleValueChild" />
        <div :class="$style.baik">Baik</div>
        <div :class="$style.titleValueChild5" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.titleValueChild" />
        <div :class="$style.baik">Baik</div>
        <div :class="$style.titleValueChild5" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UserDataHistory",
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
    },
  });
</script>
<style module>
  .sidebarChild {
    position: absolute;
    top: 0px;
    left: 7px;
    width: 275px;
    height: 1032px;
  }
  .suika {
    position: absolute;
    height: 11.31%;
    width: 34.91%;
    top: 88.69%;
    left: 34.29%;
    display: inline-block;
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
    height: 20.67%;
    width: 58.33%;
    top: 8.78%;
    right: 25.72%;
    bottom: 70.55%;
    left: 15.94%;
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
    left: -7px;
    width: 276px;
    height: 1014px;
    text-align: left;
    font-size: var(--font-size-mid);
    color: var(--color-black);
    font-family: var(--font-montserrat);
  }
  .userDataHistoryChild {
    position: absolute;
    top: 0px;
    left: 269px;
    background-color: var(--color-orange);
    width: 1170px;
    height: 68px;
  }
  .userDataHistoryItem {
    position: absolute;
    top: 124px;
    left: 298px;
    border-radius: var(--br-xl);
    background-color: var(--color-orange);
    width: 1075px;
    height: 68px;
  }
  .dataHistory {
    position: absolute;
    top: 138px;
    left: 333px;
    font-size: var(--font-size-17xl);
    font-weight: 500;
    font-family: var(--base-body-bold);
    color: var(--color-black);
    text-align: left;
    display: inline-block;
    width: 246px;
  }
  .userAndLogoChild {
    position: absolute;
    top: 0px;
    left: 4px;
    background-color: var(--color-orange);
    border-right: 1px solid var(--color-gainsboro-100);
    border-bottom: 1px solid var(--color-gainsboro-100);
    box-sizing: border-box;
    width: 273px;
    height: 68px;
  }
  .user {
    position: absolute;
    top: 22.4px;
    left: 91px;
    font-weight: 800;
    display: inline-block;
    width: 77.8px;
    height: 26.1px;
  }
  .logoSuikaTransformedPrevUiIcon {
    position: absolute;
    top: 0px;
    left: 8px;
    border-radius: var(--br-123xl);
    width: 88px;
    height: 68px;
    object-fit: cover;
  }
  .userAndLogo {
    position: absolute;
    top: 0px;
    left: -8px;
    width: 277px;
    height: 68px;
    text-align: left;
    font-size: var(--font-size-5xl);
    color: var(--color-black);
    font-family: var(--base-body-bold);
  }
  .headingChild {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--color-whitesmoke-100);
  }
  .headingItem {
    position: absolute;
    height: 4%;
    width: 100%;
    top: 96%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--light-border-light);
    box-sizing: border-box;
  }
  .idHistory {
    position: absolute;
    top: 17px;
    left: 0px;
    line-height: 22px;
    font-weight: 500;
    display: inline-block;
    width: 165px;
  }
  .headingInner {
    position: absolute;
    top: 14px;
    right: 16px;
    width: 12px;
    height: 22px;
  }
  .heading {
    align-self: stretch;
    position: relative;
    height: 50px;
    color: var(--light-dark);
    font-family: var(--base-body-bold);
  }
  .div {
    position: absolute;
    top: 14px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 173px;
  }
  .titleValue {
    align-self: stretch;
    position: relative;
    height: 50px;
  }
  .tableColumnChild {
    position: relative;
    background-color: var(--light-light);
    border: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
    width: 173px;
    height: 1px;
  }
  .titleValueChild {
    position: absolute;
    height: 98%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 2%;
    left: 0%;
    background-color: var(--light-white);
  }
  .titleValueItem {
    position: absolute;
    height: 2%;
    width: 100%;
    top: 98%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--light-light);
    border: 1px solid var(--light-light);
    box-sizing: border-box;
  }
  .tableColumn {
    position: absolute;
    top: 236px;
    left: 309px;
    width: 173px;
    height: 548px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .namaBarang {
    position: absolute;
    top: 17px;
    left: 0px;
    line-height: 22px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
  }
  .sonyAlphaA7 {
    position: absolute;
    top: 15px;
    left: -0.2px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 191.1px;
    transform: rotate(-0.98deg);
    transform-origin: 0 0;
  }
  .titleValueChild1 {
    position: absolute;
    height: 6%;
    width: 101.06%;
    top: 96%;
    right: -0.53%;
    bottom: -2%;
    left: -0.53%;
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--light-light);
    box-sizing: border-box;
  }
  .toyotaAvanza {
    position: absolute;
    top: 14px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 189px;
  }
  .tableColumn1 {
    position: absolute;
    top: 237px;
    left: 482px;
    width: 189px;
    height: 548px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .dateStart {
    position: absolute;
    top: 17px;
    left: 0px;
    line-height: 22px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 208px;
  }
  .lineDiv {
    position: absolute;
    height: 4%;
    width: 100.92%;
    top: 98%;
    right: -0.46%;
    bottom: -2%;
    left: -0.46%;
    border-top: 2px solid var(--light-border-light);
    box-sizing: border-box;
  }
  .heading2 {
    align-self: stretch;
    position: relative;
    background-color: var(--color-gainsboro-200);
    height: 50px;
    color: var(--light-dark);
    font-family: var(--base-body-bold);
  }
  .dateValueChild {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--light-white);
  }
  .desember2023 {
    position: absolute;
    top: 14px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 218px;
  }
  .dateValueItem {
    position: absolute;
    height: 2%;
    width: 100.46%;
    top: 99%;
    right: -0.23%;
    bottom: -1%;
    left: -0.23%;
    border-top: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .tableColumn2 {
    position: absolute;
    top: 237px;
    left: 671px;
    width: 218px;
    height: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .dateEnd {
    position: absolute;
    top: 17px;
    left: 0px;
    line-height: 22px;
    font-weight: 500;
    display: inline-block;
    width: 202px;
  }
  .groupIcon {
    position: absolute;
    top: 14px;
    right: 16px;
    width: 12px;
    height: 22px;
    display: none;
  }
  .desember20232 {
    position: absolute;
    top: 14.4px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 206.7px;
    transform: rotate(-0.19deg);
    transform-origin: 0 0;
  }
  .titleValueChild5 {
    position: absolute;
    height: 2%;
    width: 100%;
    top: 98%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .desember20233 {
    position: absolute;
    top: 14px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 211px;
  }
  .tableColumn3 {
    position: absolute;
    top: 237px;
    left: 889px;
    width: 211px;
    height: 551px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .kondisi {
    position: absolute;
    top: 17px;
    left: 0px;
    line-height: 22px;
    font-weight: 500;
    display: inline-block;
    width: 212px;
  }
  .baik {
    position: absolute;
    top: 14px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 212px;
  }
  .tableColumn4 {
    position: absolute;
    top: 237px;
    left: 1100px;
    width: 212px;
    height: 551px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .userDataHistory {
    position: relative;
    background-color: var(--light-white);
    width: 100%;
    height: 1024px;
    overflow: hidden;
    text-align: center;
    font-size: var(--base-body-size);
    color: var(--light-secondary);
    font-family: var(--base-body);
  }
</style>
