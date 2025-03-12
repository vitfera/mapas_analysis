from pathlib import Path
import yaml
from data_mining.file_util import remove_file_if_exists


list_of_apis = [
    # Instalações em nível federal ou internacional
    {"file_name": "minc", "url": "https://mapa.cultura.gov.br"},
    {"file_name": "uruguai", "url": "http://culturaenlinea.uy"},
    {"file_name": "pontosdememoria", "url": "http://pontosdememoria.cultura.gov.br"},

    # Instalações estaduais
    {"file_name": "ceara", "url": "https://mapacultural.secult.ce.gov.br"},
    {"file_name": "espirito_santo", "url": "https://mapa.cultura.es.gov.br"},
    {"file_name": "goias ", "url": "https://mapagoiano.cultura.go.gov.br"},
    {"file_name": "maranhao", "url": "http://ma.mapas.cultura.gov.br"},
    {"file_name": "mato_grosso", "url": "https://mapas.mt.gov.br"},
    {"file_name": "mato_grosso_do_sul", "url": "https://www.mapacultural.ms.gov.br"},
    {"file_name": "para", "url": "https://mapacultural.pa.gov.br"},
    {"file_name": "paraiba", "url": "http://pb.mapas.cultura.gov.br"},
    {"file_name": "pernambuco", "url": "https://www.mapacultural.pe.gov.br"},
    {"file_name": "sergipe", "url": "http://mapas.cultura.se.gov.br"},
    {"file_name": "tocantins", "url": "http://mapa.cultura.to.gov.br"},
    
    # Instalações municipais
    {"file_name": "ilheus", "url": "http://ilheus.ba.mapas.cultura.gov.br"},
    {"file_name": "camacari", "url": "https://mapacultural.camacari.ba.gov.br"},
    {"file_name": "senhor_do_bonfim", "url": "http://senhordobonfim.ba.mapas.cultura.gov.br"},
    {"file_name": "chorozinho", "url": "https://mapacultural.chorozinho.ce.gov.br"},
    {"file_name": "sobral", "url": "https://cultura.sobral.ce.gov.br"},
    {"file_name": "juazeiro_do_norte", "url": "https://mapacultural.juazeiro.ce.gov.br"},
    {"file_name": "belo_horizonte", "url": "http://mapaculturalbh.pbh.gov.br"},
    {"file_name": "santa_luzia", "url": "http://mapacultural.santaluzia.mg.gov.br"},
    {"file_name": "ipatinga", "url": "http://mapacultural.ipatinga.mg.gov.br"},
    {"file_name": "varzea_grande", "url": "http://varzeagrande.mt.mapas.cultura.gov.br"},
    {"file_name": "joao_pessoa", "url": "http://jpcultura.joaopessoa.pb.gov.br"},
    {"file_name": "londrina", "url": "https://londrinacultura.londrina.pr.gov.br"},
    {"file_name": "foz_do_iguacu", "url": "http://mapadaculturafoz.pmfi.pr.gov.br"},
    {"file_name": "maringa", "url": "http://maringacultura.maringa.pr.gov.br:38081"},
    {"file_name": "rio_das_ostras", "url": "http://mapadacultura.riodasostras.rj.gov.br"},
    {"file_name": "laguna", "url": "http://laguna.sc.mapas.cultura.gov.br"},
    {"file_name": "novo_hamburgo", "url": "http://mapacultural.novohamburgo.rs.gov.br"},
    {"file_name": "rio_grande", "url": "http://mapacultural.riogrande.rs.gov.br"},
    {"file_name": "sao_paulo", "url": "http://spcultura.prefeitura.sp.gov.br"},
    {"file_name": "santo_andre", "url": "http://culturaz.santoandre.sp.gov.br"},
    {"file_name": "sao_caetano_do_sul", "url": "http://mapacultural.saocaetanodosul.sp.gov.br"},
    {"file_name": "osasco", "url": "http://osasco.sp.mapas.cultura.gov.br"},
    {"file_name": "franco_da_rocha", "url": "http://francodarocha.sp.mapas.cultura.gov.br"},
    {"file_name": "guaruja", "url": "http://mapadacultura.guaruja.sp.gov.br"},
    {"file_name": "varzea_paulista", "url": "http://janelacultural.varzeapaulista.sp.gov.br"},
    {"file_name": "itu", "url": "http://mapacultural.itu.sp.gov.br"},
    {"file_name": "guarulhos", "url": "http://grucultura.guarulhos.sp.gov.br"},
    {"file_name": "itapetininga", "url": "http://mapacultural.itapetininga.sp.gov.br"},
    
    # outras
    {"file_name": "maua", "url": "https://mapacultural.maua.sp.gov.br"},
    {"file_name": "agimos", "url": "https://mapacultural.agimos.org.br"},
    {"file_name": "sao_goncalodo_amarante", "url": "https://mapacultural.saogoncalodoamarante.ce.gov.br"},
    {"file_name": "natal", "url": "https://mapacultural.natal.rn.gov.br"},
    {"file_name": "amapa", "url": "https://mapacultural.ap.gov.br"},
    {"file_name": "aparecida", "url": "https://portaldacultura.aparecida.go.gov.br"},

    
]


configs = {
    "data_folder": "data",
    "apis": []   
}

limit = 8

def create_api(api_, url, file_name, specific_file_name=False, no_params=False, append=False):
    api = {}
    if specific_file_name:
        api["file_name"] = file_name
    else:
        api["file_name"] = api_["file_name"] + file_name
    
    api["url"] = api_["url"] + url
    api["enabled"] = True
    api["append"] = append
    if no_params:
        api["params"] = {}
    else:
        api["params"] = {
            "@select": "*",
            "@files": "(avatar,avatar.avatarSmall):url",
            "@limit": limit
        }
    configs["apis"].append(api)

if __name__ == "__main__":
    config_path = Path(__file__).parent / "configs.yaml"
    with open(config_path, "w", encoding="utf-8") as file: 
        
        for api in list_of_apis:
            create_api(api, "/api/subsite/find", "_subsite.json")
        
        first = True
        for api in list_of_apis:
            if first:
                create_api(api, "/api/site/version", "versions.json", specific_file_name=True, no_params=True, append=False)
                first = False
            else:
                create_api(api, "/api/site/version", "versions.json", specific_file_name=True, no_params=True, append=True)
        
        first = True
        for api in list_of_apis:    
            if first:
                create_api(api, "/api/site/info", "infos.json", specific_file_name=True, no_params=True, append=False)
                first = False
            else:
                create_api(api, "/api/site/info", "infos.json", specific_file_name=True, no_params=True, append=True)
                
            
        
        yaml.dump(configs, file, default_flow_style=False, allow_unicode=True, sort_keys=False)
 
        
       
    