<template>
  <div :class="$style.protoLogin">
    <div :class="$style.form">
      <div :class="$style.email">
        <div :class="$style.username">Username</div>
        <div :class="$style.frame">
          <input
            v-model="username" 
            :class="$style.masukkanUsername"
            type="text"
          />
        </div>
      </div>
      <div :class="$style.input">
        <div :class="$style.username">Password</div>
        <div :class="$style.frame1">
          <input
            v-model="password" 
            :class="$style.masukkanPassword"
            type="password" 
          />
        </div>
      </div>
      <div :class="$style.btn" @click="onBtnContainerClick">
        <div :class="$style.login">Login</div>
      </div>
      <div :class="$style.frame2">
        <img
          :class="$style.logoSuikaTransformedPrevUiIcon"
          alt=""
          src="/logo-suikatransformed-prev-ui-11@2x.png"
        />
        <div :class="$style.webBassedInventory">
          Web Bassed Inventory Management System
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "ProtoLogin",
    data() {
      return {
        username: "",
        password: "",
      };
    },
    methods: {
      onBtnContainerClick() {
        // Implementasi logika login
        if (this.validateLogin()) {
          // Jika login sukses, redirect ke halaman admin atau user
          if (this.username === "suika") {
            this.$router.push("/admin-halaman-admin");
          } else if (this.username === "user") {
            this.$router.push("/user-profile");
          } else {
            // Jika username tidak sesuai, lakukan tindakan lainnya
            alert("Login berhasil, namun tidak ada halaman yang sesuai dengan username.");
          }
        } else {
          // Jika login gagal, tampilkan pesan kesalahan atau lakukan tindakan lainnya
          alert("Login gagal. Periksa kembali username dan password.");
        }
      },
      validateLogin() {
        // Logika validasi login
        const accounts = [
          { username: "suika", password: "suika" },
          { username: "user", password: "user" },
          { username: "20003", password: "120005" },
          { username: "20004", password: "120004" },
        ];

        // Cek apakah input username dan password sesuai dengan salah satu akun
        return accounts.some(
          (account) =>
            account.username === this.username && account.password === this.password
        );
      },
    },
  });
</script>

<style module>
  .username {
    align-self: stretch;
    position: relative;
    font-weight: 500;
  }
  .masukkanUsername {
    position: relative;
    display: inline-block;
    width: 132px;
    height: 17px;
    flex-shrink: 0;
  }
  .frame {
    align-self: stretch;
    border-radius: var(--br-9xs);
    background-color: var(--light-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    height: 50.1px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-mini);
    font-size: var(--font-size-xs);
    color: var(--color-lightgray);
  }
  .email {
    position: absolute;
    top: 282.9px;
    left: 29.5px;
    width: 415px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-2xs);
  }
  .masukkanPassword {
    border: none;
    font-family: var(--font-montserrat);
    font-size: var(--font-size-xs);
    background-color: transparent;
    position: relative;
    color: var(--color-lightgray);
    text-align: left;
    display: inline-block;
    width: 124px;
    height: 17.1px;
    flex-shrink: 0;
  }
  .frame1 {
    align-self: stretch;
    border-radius: var(--br-9xs);
    background-color: var(--light-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    height: 50.1px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-mini);
  }
  .input {
    position: absolute;
    top: 380.9px;
    left: 29.5px;
    width: 415px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-2xs);
  }
  .login {
    position: relative;
    font-weight: 500;
    display: inline-block;
    width: 55px;
    height: 19.3px;
    flex-shrink: 0;
  }
  .btn {
    position: absolute;
    height: 8.01%;
    width: 87.37%;
    top: 80.52%;
    right: 6.42%;
    bottom: 11.47%;
    left: 6.21%;
    border-radius: var(--br-9xs);
    background-color: #0ca1c2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: var(--base-body-size);
    color: var(--light-white);
  }
  .logoSuikaTransformedPrevUiIcon {
    align-self: stretch;
    position: relative;
    border-radius: var(--br-123xl);
    max-width: 100%;
    overflow: hidden;
    height: 189px;
    flex-shrink: 0;
    object-fit: cover;
  }
  .webBassedInventory {
    align-self: stretch;
    position: relative;
    margin-top: -23px;
  }
  .frame2 {
    position: absolute;
    top: 31.9px;
    left: 79.5px;
    width: 316px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    font-size: var(--font-size-5xl);
    color: var(--color-black);
    font-family: var(--font-ibarra-real-nova);
  }
  .form {
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--light-white);
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
    width: 475px;
    height: 625.8px;
  }
  .protoLogin {
    position: relative;
    background: linear-gradient(71.17deg, #f8d442, #ffd476);
    width: 100%;
    height: 1024px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 134px 0px;
    box-sizing: border-box;
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--color-dimgray-100);
    font-family: var(--font-montserrat);
  }
</style>
