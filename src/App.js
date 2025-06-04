import './App.scss';
import { Worker,Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

function App() {

  return (
    <div className="home">
      <section className='header'>
         <img src='/logo.png'/>
         <div className='header-menu'>
            <a>Home</a>
            <a>Introdução</a>
            <a>Receita</a>
            <a>Como funciona</a>
         </div>
         <img src='/Senac.png'/>
      </section>
      <section className='inicial-presentation'>
        <p>Engenharia de Produção</p>
        <h1>Projeto Cervejaria S.E.P</h1>
      </section>
      <section className='quem-somos'>

      </section>
      <section className='intro'>
        <div className='text-box'>
          <h1 className='title'>Introdução</h1>
          <h3>O que é cerveja?</h3>
          <p>• Decreto No. 6 871, de 04 de Junho de 2009, decreta a Lei no. 8 918, de 14 de Julho de 1994 • “É a bebida obtida pela fermentação alcoólica do mosto cervejeiro oriundo do malte de cevada e água potável, por ação de levedura, com adição de lúpulo.” • “O malte de cevada e o lúpulo podem ser substituídos por seus respectivos extratos. Parte do malte de cevada pode ser substituída por adjuntos cervejeiros, cujo emprego não poderá ser superior a 45% em relação ao extrato primitivo".</p>
        </div>
        <div className='text-box'>
          <h3>A cerveja no Brasil</h3>
          <p>• 1637 - Recife (Holandeses);<br/>• 1808 - Chegada da Família Real;<br/>• Até 1814 - Exclusividade da Inglaterra;<br/>• A partir de 1870 - "Cerveja Marca Barbante“;<br/>• Atual: Revolução Cervejeira Nacional.</p>
        </div>
        <div className='text-box' id='pdf-box'>
          <h1 className='title'>Receita</h1>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <div
                className='pdf-div'
                style={{
                    border: '1px solid rgba(0, 0, 0, 0.3)',
                    height: '755px',
                    maxWidth: '600px',
                    minWidth: '300px',
                    width: '100%',
                    //borderRadius: '25px',
                    //padding: '15px 5px'
                }}
            >
              <Viewer fileUrl="/receita.pdf" />
            </div>
          </Worker>
          <img src='/producao.png'/>
        </div>
        <div className='text-box'>
          <h1 className='title'>Como funciona?</h1>
          <h3>Termômetro Arduino</h3>
          <p>A utilização de um sensor de temperatura com Arduino Uno e relé no processo de fabricação de cerveja, especialmente na parte de controle de temperatura durante a fermentação ou mash (processo de aquecimento do grão para extrair os açúcares), é muito comum. O controle preciso da temperatura é crucial para garantir a qualidade da cerveja e a eficiência da fermentação.</p>
        </div>
        <div className='text-box'>
          <h3>Monitoramento da Temperatura</h3>
          <p>O Arduino Uno lê a temperatura de um sensor de temperatura (como um DHT11, DHT22, LM35 ou DS18B20). O sensor é colocado dentro do recipiente de fermentação ou do tanque de mash (onde você faz a mistura do malte com a água). Ele fornece dados de temperatura que são essenciais para controlar o processo de fabricação da cerveja.</p>
        </div>
        <div className='text-box'>
          <h3>Relé</h3>
          <p>O relé é usado para controlar dispositivos que ajustam a temperatura, como aquecedores ou coolers (sistemas de resfriamento). O Arduino pode ligar ou desligar esses dispositivos com base na leitura de temperatura que recebe do sensor.</p>
        </div>
        <div className='text-box'>
          <h3>Processos Específicos</h3>
          <p><b>• Durante o Mash:</b> A temperatura da mistura de grãos e água (o "mash") deve ser controlada de forma precisa, geralmente entre 62°C e 72°C, para converter os amidos dos grãos em açúcares fermentáveis. O Arduino pode controlar o aquecimento da água ou do mosto para manter essa temperatura constante.</p>
          <p><b>• Durante a Fermentação:</b> Durante a fermentação, a temperatura ideal fica geralmente entre 18°C e 24°C para a maioria das leveduras. Controlar a temperatura durante esse processo é vital, já que temperaturas mais altas ou mais baixas podem afetar o sabor e a eficiência da fermentação.</p>
        </div>
        <div className='text-box'>
          <h3>Componentes Necessários</h3>
          <p><b>• Arduino Uno:</b> O cérebro do sistema que recebe as leituras de temperatura e aciona o relé.</p>
          <p><b>• Sensor de Temperatura:</b> Pode ser um DHT11, DHT22, LM35 ou DS18B20. O DHT22, por exemplo, é bom para ambientes mais amplos e tem precisão melhor do que o DHT11.</p>
          <p><b>• Relé:</b> Para controlar dispositivos de maior potência, como aquecedores ou coolers.</p>
          <p><b>• Aquecedor ou Sistema de Resfriamento:</b> Pode ser um aquecedor imersivo para aumentar a temperatura ou um sistema de resfriamento (ex: fan, bomba de água ou compressor) para reduzir a temperatura.</p>
          <p><b>• Fonte de Alimentação:</b> Para alimentar o Arduino e os dispositivos controlados.</p>
          <p><b>• Cabos de Conexão:</b> Para conectar os componentes corretamente.</p>
        </div>
        <div className='text-box'>
          <h3>Funcionamento Detalhado</h3>
          <p><b>• Leitura da Temperatura:</b> O sensor de temperatura é colocado no tanque de fermentação ou mash e envia dados para o Arduino. O Arduino converte esses dados para um valor de temperatura que pode ser utilizado para decisões de controle.</p>
          <p><b>• Processamento da Temperatura:</b> O Arduino monitora a temperatura a cada segundo ou a intervalos regulares, verificando se a temperatura está dentro da faixa desejada.</p>
        </div>
        <div className='text-box'>
          <h3>Aquecimento ou Resfriamento</h3>
          <p><i>Se a temperatura estiver abaixo da faixa ideal</i>, o Arduino aciona o relé para ligar o aquecedor (por exemplo, uma fita aquecedora ou um aquecedor imersivo).</p>
          <p><i>Se a temperatura estiver acima da faixa ideal</i>, o Arduino aciona o relé para ligar um sistema de resfriamento, como um ventilador ou bomba de água fria.</p>
          <img src='/montagem.jpeg' />
        </div>
        <div className='text-box'>
          <h3>Controle de Relé</h3>
          <p>O relé é controlado por um pino digital do Arduino. Quando o Arduino decide que o aquecedor ou o sistema de resfriamento deve ser ativado, ele envia um sinal (ALTO) ou desativa o sistema (BAIXO).</p>
        </div>
        <div className='text-box'>
          <h3>Exibição e Ajuste</h3>
          <p>O sistema pode ser configurado para monitorar e ajustar a temperatura de maneira contínua, garantindo que ela se mantenha dentro dos limites ideais. O monitoramento em tempo real pode ser feito via monitor serial (para visualizar os valores no computador) ou através de uma interface com display LCD (para visualização no local).</p>
        </div>
        <div className='text-box'>
          <h3>Exibição e Ajuste</h3>
          <p>O sistema pode ser configurado para monitorar e ajustar a temperatura de maneira contínua, garantindo que ela se mantenha dentro dos limites ideais. O monitoramento em tempo real pode ser feito via monitor serial (para visualizar os valores no computador) ou através de uma interface com display LCD (para visualização no local).</p>
        </div>
      </section>
        
    </div>
  );
}

export default App;