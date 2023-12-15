<template>
  <div :class="$style.userHalamanUser">
    <div :class="$style.header">
      <div :class="$style.sidebar">
        <img
          :class="$style.sidebarChild"
          alt=""
          src="/rectangle-2.svg"
          data-scroll-to="rectangle"
        />
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
              <div :class="$style.label" :onClick="onLabelTextClick">
                Dashboard
              </div>
            </div>
            <div :class="$style.link">
              <img
                :class="$style.materialSymbolspersonSearchIcon"
                alt=""
                src="/materialsymbolspersonsearch.svg"
              />
              <div :class="$style.label" @click="onLabelText1Click">
                History
              </div>
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
      <div :class="$style.headerChild" />
    </div>
    <div :class="$style.userHalamanUserChild" />
    <div :class="$style.selamatDatangDi">Selamat Datang Di Dashboard User</div>
    <div :class="$style.peminjamanParent">
      <b :class="$style.peminjaman">Peminjaman</b>
      <div :class="$style.div">3</div>
    </div>
    <div :class="$style.userHalamanUserItem" />
    <div :class="$style.selengkapnya">Selengkapnya</div>
    <div :class="$style.historyParent">
      <b :class="$style.peminjaman">History</b>
      <div :class="$style.div">2</div>
    </div>
    <div :class="$style.userHalamanUserInner" />
    <div :class="$style.selengkapnya1">Selengkapnya</div>
    <div :class="$style.rectangleParent">
      <div :class="$style.frameChild" />
      <div :class="$style.user">User</div>
      <img
        :class="$style.logoSuikaTransformedPrevUiIcon"
        alt=""
        src="/logo-suikatransformed-prev-ui-13@2x.png"
      />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UserHalamanUser",
    methods: {
      onLabelTextClick() {
        const anchor = document.querySelector("[data-scroll-to='rectangle']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
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
    top: 6px;
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
    position: relative;
    width: 270px;
    height: 1021px;
  }
  .headerChild {
    position: relative;
    background-color: var(--color-orange);
    width: 1173px;
    height: 68px;
    margin-left: -3px;
  }
  .header {
    position: absolute;
    top: -10px;
    left: 0px;
    width: 1437px;
    height: 1034px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 4px 0px 0px;
    box-sizing: border-box;
    font-size: var(--font-size-mid);
    color: var(--color-black);
    font-family: var(--font-montserrat);
  }
  .userHalamanUserChild {
    position: absolute;
    top: 125px;
    left: 303px;
    border-radius: var(--br-xl);
    background-color: var(--color-orange);
    width: 1088px;
    height: 68px;
  }
  .selamatDatangDi {
    position: absolute;
    top: 144px;
    left: 332px;
    font-weight: 500;
    color: var(--color-black);
    display: inline-block;
    width: 627px;
  }
  .peminjaman {
    position: absolute;
    top: 18px;
    left: 9px;
    display: inline-block;
    width: 335px;
    height: 42px;
  }
  .div {
    position: absolute;
    top: 67px;
    left: 55px;
    font-size: var(--font-size-21xl);
    font-weight: 500;
    color: var(--color-black);
    display: inline-block;
    width: 105.3px;
    height: 100.7px;
  }
  .peminjamanParent {
    position: absolute;
    top: 258.5px;
    left: 300.5px;
    border-radius: var(--br-11xl);
    background-color: var(--color-orange);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 489.8px;
    height: 210.5px;
    font-family: var(--font-montserrat);
  }
  .userHalamanUserItem {
    position: absolute;
    top: 389px;
    left: 323px;
    border-radius: var(--br-xl);
    background-color: var(--color-khaki);
    width: 436px;
    height: 68px;
  }
  .selengkapnya {
    position: absolute;
    top: 413px;
    left: 385px;
    font-weight: 800;
    text-align: center;
    display: inline-block;
    width: 335px;
    height: 42px;
  }
  .historyParent {
    position: absolute;
    top: 258.5px;
    left: 873.5px;
    border-radius: var(--br-11xl);
    background-color: var(--color-orange);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 489.8px;
    height: 210.5px;
    font-family: var(--font-montserrat);
  }
  .userHalamanUserInner {
    position: absolute;
    top: 389px;
    left: 896px;
    border-radius: var(--br-xl);
    background-color: var(--color-khaki);
    width: 436px;
    height: 68px;
  }
  .selengkapnya1 {
    position: absolute;
    top: 413px;
    left: 958px;
    font-weight: 800;
    text-align: center;
    display: inline-block;
    width: 335px;
    height: 42px;
  }
  .frameChild {
    position: absolute;
    top: 0px;
    left: 4px;
    background-color: var(--color-orange);
    border-right: 1px solid var(--color-gainsboro-100);
    border-bottom: 1px solid var(--color-gainsboro-100);
    box-sizing: border-box;
    width: 273px;
    height: 62px;
  }
  .user {
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
    top: 0px;
    left: 7px;
    border-radius: var(--br-123xl);
    width: 88px;
    height: 83.7px;
    object-fit: cover;
  }
  .rectangleParent {
    position: absolute;
    top: 0px;
    left: -7px;
    width: 277px;
    height: 62px;
    color: var(--color-black);
  }
  .userHalamanUser {
    position: relative;
    background-color: var(--light-white);
    width: 100%;
    height: 1024px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-5xl);
    color: var(--color-dimgray);
    font-family: var(--base-body-bold);
  }
</style>
