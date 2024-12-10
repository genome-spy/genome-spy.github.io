import{g as u}from"./_commonjsHelpers-C932wzq6.js";class f{}class b{constructor(){this.signals=new Set,this.abortController=new AbortController}addSignal(t=new f){if(this.signal.aborted)throw new Error("cannot add a signal, already aborted!");this.signals.add(t),t.aborted?this.handleAborted(t):typeof t.addEventListener=="function"&&t.addEventListener("abort",()=>{this.handleAborted(t)})}handleAborted(t){this.signals.delete(t),this.signals.size===0&&this.abortController.abort()}get signal(){return this.abortController.signal}abort(){this.abortController.abort()}}class g{constructor(){this.callbacks=new Set}addCallback(t=()=>{}){this.callbacks.add(t),t(this.currentMessage)}callback(t){this.currentMessage=t;for(const e of this.callbacks)e(t)}}class l{constructor({fill:t,cache:e}){if(typeof t!="function")throw new TypeError("must pass a fill function");if(typeof e!="object")throw new TypeError("must pass a cache object");if(typeof e.get!="function"||typeof e.set!="function"||typeof e.delete!="function")throw new TypeError("cache must implement get(key), set(key, val), and and delete(key)");this.cache=e,this.fillCallback=t}static isAbortException(t){return t.name==="AbortError"||t.code==="ERR_ABORTED"||t.message==="AbortError: aborted"||t.message==="Error: aborted"}evict(t,e){this.cache.get(t)===e&&this.cache.delete(t)}fill(t,e,r,i){const s=new b,c=new g;c.addCallback(i);const a={aborter:s,promise:this.fillCallback(e,s.signal,h=>{c.callback(h)}),settled:!1,statusReporter:c,get aborted(){return this.aborter.signal.aborted}};a.aborter.addSignal(r),a.aborter.signal.addEventListener("abort",()=>{a.settled||this.evict(t,a)}),a.promise.then(()=>{a.settled=!0},()=>{a.settled=!0,this.evict(t,a)}).catch(h=>{throw console.error(h),h}),this.cache.set(t,a)}static checkSinglePromise(t,e){function r(){if(e!=null&&e.aborted)throw Object.assign(new Error("aborted"),{code:"ERR_ABORTED"})}return t.then(i=>(r(),i),i=>{throw r(),i})}has(t){return this.cache.has(t)}get(t,e,r,i){if(!r&&e instanceof AbortSignal)throw new TypeError("second get argument appears to be an AbortSignal, perhaps you meant to pass `null` for the fill data?");const s=this.cache.get(t);return s?s.aborted&&!s.settled?(this.evict(t,s),this.get(t,e,r,i)):s.settled?s.promise:(s.aborter.addSignal(r),s.statusReporter.addCallback(i),l.checkSinglePromise(s.promise,r)):(this.fill(t,e,r,i),l.checkSinglePromise(this.cache.get(t).promise,r))}delete(t){const e=this.cache.get(t);e&&(e.settled||e.aborter.abort(),this.cache.delete(t))}clear(){const t=this.cache.keys();let e=0;for(let r=t.next();!r.done;r=t.next())this.delete(r.value),e+=1;return e}}var n,d;function p(){if(d)return n;d=1;class o{constructor(e={}){if(!(e.maxSize&&e.maxSize>0))throw new TypeError("`maxSize` must be a number greater than 0");this.maxSize=e.maxSize,this.cache=new Map,this.oldCache=new Map,this._size=0}_set(e,r){this.cache.set(e,r),this._size++,this._size>=this.maxSize&&(this._size=0,this.oldCache=this.cache,this.cache=new Map)}get(e){if(this.cache.has(e))return this.cache.get(e);if(this.oldCache.has(e)){const r=this.oldCache.get(e);return this.oldCache.delete(e),this._set(e,r),r}}set(e,r){return this.cache.has(e)?this.cache.set(e,r):this._set(e,r),this}has(e){return this.cache.has(e)||this.oldCache.has(e)}peek(e){if(this.cache.has(e))return this.cache.get(e);if(this.oldCache.has(e))return this.oldCache.get(e)}delete(e){const r=this.cache.delete(e);return r&&this._size--,this.oldCache.delete(e)||r}clear(){this.cache.clear(),this.oldCache.clear(),this._size=0}*keys(){for(const[e]of this)yield e}*values(){for(const[,e]of this)yield e}*[Symbol.iterator](){for(const e of this.cache)yield e;for(const e of this.oldCache){const[r]=e;this.cache.has(r)||(yield e)}}get size(){let e=0;for(const r of this.oldCache.keys())this.cache.has(r)||e++;return this._size+e}}return n=o,n}var m=p();const C=u(m);export{l as A,C as L};