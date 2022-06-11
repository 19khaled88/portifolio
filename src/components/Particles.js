import { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const Particle=(props)=>{
    const options = useMemo(() => {
        return {
            background:{
                color:'' 
            },
            fullScreen:{
                enable:true,
                zIndex:0
            },
            interactivity:{
                events:{
                    onClick:{
                        enable:true,
                        mode:'push'
                    }
                }
            },
            particles:{
                links:{
                    enable:true
                },
                move:{
                    enable:true,
                    speed:{min:1,max:3}
                },
                size:{
                    value:{min:1,max:3}
                },
                opacity:{
                    value:{min:0.3,max:0.7}
                }
            }
        };
    },[]);

    const particlesInit= useCallback((engine:Engine)=>{
        loadSlim(engine)
        // loadFull(engine)
    },[])

    return <Particles options={options} init={particlesInit} style={{
            marginTop:'70px'
    }}/>
}

export default Particle