What is Tide?


TIde is MobX + React with some changes.


- React events bubble up through the compoennt network
- React context is filled out with:
    parent: React.PropTypes.object,
    app: React.PropTypes.object,
    router: React.PropTypes.object,
    state: React.PropTypes.object,
    store: React.PropTypes.object,
    cache: React.PropTypes.object

 Components
  - Autobinds?

 Actions
  - Take actions on data
    - wraps each function within @action from mobX
    - autobinds the functions
  - Helper to get remote data
      get / put / delete / post / request
      throws InvalidRequest on failure
      ... parses json if necessary

Store
  - storage and caching of data



Revesable Actions
  - it'll be useful to be able to undo actions taken

  Option 1:
    - explicitly make user create a function to undo a specific action (useful in the case of ajax actions)

  Option 2:
    - Integrate mobx-store which lets you undo/redo singular changes (useful in the case of ui actions)

  Option 3:
    - patch mobx to report all changes made in an action block; these can then be reverted b/c we will know previous state (better form of option 2)

  Option 4:
    - undo the redux way; anytime an action completes, make a total copy of the data store ... via toJS()
    - store in localstorage