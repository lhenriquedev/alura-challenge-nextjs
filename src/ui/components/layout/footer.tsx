export function Footer() {
  return (
    <footer className="mt-40 flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-3">
          <h3 className="font-chakra-petch text-main leading-[150%]">
            Vamos conversar?
          </h3>
          <h2 className="font-chakra-petch text-secondary font-bold text-6xl leading-[101%]">
            Entre em contato
          </h2>
        </div>

        <div>
          <ul>
            <li>
              <a href="" className="text-tertiary leading-[150%]">
                fernandamascheti@gmail.com
              </a>
            </li>
            <li>
              <a href="" className="text-tertiary leading-[150%]">
                /Fernanda Mascheti
              </a>
            </li>
            <li>
              <a href="" className="text-tertiary leading-[150%]">
                /fernandamascheti
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
