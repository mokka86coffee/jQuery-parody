let $=( tag, _$={
    node: document.querySelectorAll(tag),
    method: (event,func)=> 
        (_$.node
            .forEach(n=>
                n.addEventListener(event, func) ), 
            _$
        )
    }) => _$;
