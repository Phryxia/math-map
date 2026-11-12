# 최대 절약법

# 개요

**최대 절약법(maximum parsimony)** 은 관측한 서열을 설명하는 데 필요한 염기 변화의 수가 가장 적은 계통수를 고르는 방법이다. 네 종 1, 2, 3, 4 의 어느 자리에 A, A, G, G 가 보인다. 1 과 2 를 묶고 3 과 4 를 묶은 나무에서는 변화 한 번으로 이 자리가 설명되지만, 1 과 3 을 묶은 나무에서는 두 번이 필요하다.

최대 절약법은 나무마다 이 최소 변화 수를 세어 모든 자리에서 더하고, 그 합이 가장 작은 나무를 고른다. 나무 하나의 최소 변화 수는 Fitch 알고리즘으로 잎에서 뿌리로 한 번 훑어 구한다.

# 직관

나무 $T_1$ 은 1 과 2 를 노드 $u$ 에, 3 과 4 를 노드 $v$ 에 붙이고 $u$ 와 $v$ 를 뿌리에 붙인다. $u$ 에 A, $v$ 에 G 를 놓으면 $u$ 와 $v$ 사이 한 곳에서만 염기가 바뀐다.

나무 $T_2$ 는 1 과 3 을 $u$ 에, 2 와 4 를 $v$ 에 붙인다. $u$ 아래에는 A 와 G 가 있으므로 $u$ 에 무엇을 놓든 그 아래 두 가지 가운데 하나에서 변화가 있고, $v$ 도 마찬가지다. 그래서 변화가 적어도 두 번이다.

조상 노드에 놓을 염기를 하나씩 정하는 대신, 노드마다 변화 수를 가장 적게 하는 염기의 집합을 [동적 계획법](dynamic-programming.md)으로 아래에서부터 구한다. 두 자식의 집합이 겹치면 겹치는 부분이 그 노드의 집합이고 변화가 늘지 않는다. 겹치지 않으면 합집합이 그 노드의 집합이고 변화가 하나 는다. $T_2$ 에서 $u$ 와 $v$ 의 집합은 모두 $\lbrace\mathrm A,\mathrm G\rbrace$ 이고 변화가 하나씩 늘어 $2$ 가 된다.

# 정의

## 절약 점수

나무 $T$ 의 노드마다 염기를 배정한 것을 **배정(labeling)** 이라 하고, 잎의 배정은 관측한 염기로 고정한다. 한 자리의 **절약 점수(parsimony score)** 는 양 끝 염기가 다른 가지 수를 모든 배정에 대해 최소로 한 값이다. 서열 전체의 점수는 자리마다의 점수의 합이다. 직관 절의 자리에서 $T_1$ 의 점수는 $1$, $T_2$ 의 점수는 $2$ 다.

점수가 가장 작은 나무를 고르는 것을 **최대 절약법** 이라 한다.

## Fitch 알고리즘

뿌리 있는 이진 나무와 한 자리의 관측이 주어질 때 다음 절차를 **Fitch 알고리즘(Fitch's algorithm)** 이라 한다[^1]. 잎 $v$ 의 집합은 관측한 염기 하나로 된 $S_v$ 이고, 점수 $c$ 는 $0$ 에서 시작한다. 자식이 $w_1,w_2$ 인 노드 $v$ 에서는 다음과 같다.

$$
S_v=\begin{cases}S_{w_1}\cap S_{w_2} & S_{w_1}\cap S_{w_2}\ne\varnothing\cr S_{w_1}\cup S_{w_2} & \text{그 밖},\quad c\leftarrow c+1\end{cases}
$$

뿌리까지 올라간 뒤의 $c$ 가 절약 점수다. 직관 절의 $T_2$ 에서는 $u$ 와 $v$ 에서 합집합이 일어나 $c=2$ 가 되고, 뿌리에서는 교집합 $\lbrace\mathrm A,\mathrm G\rbrace$ 가 비지 않아 $c$ 가 그대로다.

```javascript
// node: { left, right } 또는 잎 { base }
function fitch(node) {
  if (node.base !== undefined) return { set: new Set([node.base]), cost: 0 };
  const a = fitch(node.left);
  const b = fitch(node.right);
  const inter = new Set([...a.set].filter((x) => b.set.has(x)));
  if (inter.size > 0) return { set: inter, cost: a.cost + b.cost };
  return { set: new Set([...a.set, ...b.set]), cost: a.cost + b.cost + 1 };
}
```

# 성질

## 정확성

정리. Fitch 알고리즘이 내는 $c$ 는 한 자리의 절약 점수와 같다[^2].

증명의 요지. 노드 $v$ 아래 부분 나무의 최소 변화 수를 $m_v$ 라 할 때, $S_v$ 는 $v$ 의 염기를 고정한 최소 변화 수가 $m_v$ 인 염기의 집합이고 그 밖의 염기에서는 $m_v+1$ 이다. 두 자식의 집합이 겹치는지에 따라 $m_v$ 가 $m_{w_1}+m_{w_2}$ 또는 그보다 $1$ 큰 값이 됨을 귀납으로 보인다.

## 가중 절약과 Sankoff 알고리즘

변화마다 다른 비용을 주면, 노드마다 염기 네 개 각각에 대한 최소 비용을 잎에서 뿌리로 계산하는 동적 계획법으로 점수를 구한다. 이것을 Sankoff 알고리즘(Sankoff's algorithm)이라 하고, 모든 비용이 $1$ 이면 Fitch 알고리즘과 같은 값을 낸다.

## 나무 찾기의 어려움

나무 하나의 점수는 자리당 $O(n)$ 에 구해지지만, 점수가 가장 작은 나무를 찾는 문제는 [NP 난해](np-completeness.md)(NP-hard, nondeterministic polynomial time)다[^3]. 잎이 $n$ 개인 뿌리 없는 이진 나무는 $(2n-5)!!$ 개이므로, 실제로는 나무의 가지를 옮겨 붙이는 국소 탐색을 쓴다.

## Felsenstein 영역

정리. 이웃이 아닌 두 가지가 길고 나머지 가지가 짧은 네 종의 나무에서는, 자리 수가 늘수록 최대 절약법이 긴 두 가지를 이웃으로 묶은 틀린 나무를 고를 확률이 $1$ 로 간다[^4]. 이런 가지 길이의 영역을 **Felsenstein 영역(Felsenstein zone)** 이라 한다.

긴 두 가지에서 같은 염기로 우연히 바뀐 자리는 그 둘을 묶는 나무의 점수를 낮춘다. [Jukes–Cantor 모형](jukes-cantor-model.md) 같은 치환 모형을 쓰는 최대가능도 방법과 [이웃 결합법](neighbor-joining.md)은 이런 우연한 일치를 모형 안에서 계산하므로 이 영역에서도 일치 추정을 한다.

# 활용

- 형태 형질처럼 치환 모형을 세우기 어려운 자료의 계통 추정.
- 분자 서열의 계통 추정에서 빠른 출발 나무와 조상 염기 복원.

[^1]: W. M. Fitch, "Toward defining the course of evolution: minimum change for a specific tree topology", *Systematic Zoology* 20 (1971), 406–416.
[^2]: J. A. Hartigan, "Minimum mutation fits to a given tree", *Biometrics* 29 (1973), 53–65.
[^3]: L. R. Foulds, R. L. Graham, "The Steiner problem in phylogeny is NP-complete", *Advances in Applied Mathematics* 3 (1982), 43–49.
[^4]: J. Felsenstein, "Cases in which parsimony or compatibility methods will be positively misleading", *Systematic Zoology* 27 (1978), 401–410.

# 연관 문서

## 선수지식

- [동적 계획법](dynamic-programming.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #algorithms
