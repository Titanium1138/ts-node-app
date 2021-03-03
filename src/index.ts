class MainApplication {
  constructor() {
  }

  public doing(message: string) : void{
    console.log(message);
  }
}

(new MainApplication()).doing("Hello World!");
