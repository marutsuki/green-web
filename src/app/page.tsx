
export default function Home() {
  return (
    <main className="flex min-h-96 flex-col items-center justify-between p-24">
      <div className="hero min-h-96 glass">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">Want to know how much CO2 loading a website produces?<br/>Paste in the url of the specific page you want to know about in the search bar and get some estimations how much toll it has on our ecosystem.</p>
          </div>
        </div>
      </div>
      <div className="text-center m-32">
          This project is made possible by the <a className="text-primary" href="https://api.websitecarbon.com/">Website Carbon</a> public API.
      </div>
    </main>
  );
}

