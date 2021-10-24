import { Observable } from 'rxjs'
import { debounceTime } from 'rxjs/operators'

const search$ = new Observable<Event>(observer => {
  const search = document.getElementById('search')
  search?.addEventListener('input', event => {
    observer.next(event)
  })
})

search$
.pipe(debounceTime(5000))
.subscribe(data => console.log(data))
