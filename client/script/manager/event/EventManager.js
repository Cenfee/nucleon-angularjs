/**
 * Created by Administrator on 2015/11/27.
 */
if(!this.nc) this.nc = {};

nc.EventManager = new (function()
{
    var _eventHash = {};
    this.addEventListener = function(type, listener)
    {

        if(!_eventHash[type])
            _eventHash[type] = [];

        _eventHash[type].push(listener);
    };

    this.removeEventListener = function(type, listener)
    {
        var listeners = _eventHash[type];

        if(!listeners) return;

        var targetIndex = -1;
        for(var i = 0; i < listeners.length; ++i)
        {
            if(listeners[i] === listener)
            {
                targetIndex = i;
                break;
            }
        }

        if(targetIndex < 0) return;


        listeners.splice(targetIndex, 1);

        if(listeners.length <= 0) delete _eventHash[type];
    }

    this.dispatchEvent = function(event)
    {
        var listeners = _eventHash[event.type];

        if(!listeners) return;

        for(var i = 0; i < listeners.length; ++i)
        {
            listeners[i](event);
        }
    }

})();