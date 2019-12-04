export default function ({ store, redirect }) {
    if (!store.state.isLoggedIn){
        toastr.warning("please login");
        return redirect('/Signon');
    }
}