# Moser–Tardos 알고리즘

# 개요

**Moser–Tardos 알고리즘(Moser–Tardos algorithm)** 은 Lovász 국소 보조정리(Lovász local lemma)의 조건 아래에서, 나쁜 사건이 하나도 일어나지 않는 변수 값을 기대 다항시간에 찾는 무작위 알고리즘이다. 일어난 나쁜 사건 하나를 골라 그 사건이 쓰는 변수만 다시 뽑는 일을 되풀이한다. R. A. Moser 와 G. Tardos 가 2010 년에 발표했다[^1].

[확률적 방법](probabilistic-method.md)의 국소 보조정리는 나쁜 사건을 모두 피하는 결과가 양의 확률로 존재한다는 것만 준다. 이 알고리즘은 같은 조건에서 그 결과를 실제로 만든다.

# 직관

변수 $x_1,\dots,x_n$ 에 참과 거짓을 주는 논리식이 절 $m$ 개의 논리곱이고, 절마다 서로 다른 변수 $k$ 개가 들어 있다고 한다. 변수마다 동전을 던져 값을 주면 한 절이 거짓일 확률은 $2^{-k}$ 다. 한 절과 변수를 공유하는 다른 절이 $d$ 개 이하이고 $e\thinspace 2^{-k}(d+1)\le 1$ 이면, 국소 보조정리에 따라 모든 절이 참인 값이 존재한다.

존재를 알아도 동전을 던져 그 값을 얻을 확률은 $m$ 이 커지면 지수적으로 작아질 수 있다. 절들이 변수를 공유하지 않는 극단의 경우에도 모든 절이 참일 확률은 $(1-2^{-k})^m$ 이다. 그래서 동전을 통째로 다시 던지는 대신, 거짓인 절 하나를 골라 그 절의 변수 $k$ 개만 다시 던진다. 이 절은 참이 될 수도 있고, 변수를 공유하는 이웃 절이 새로 거짓이 될 수도 있다.

다시 던질 때마다 거짓인 절이 줄어든다는 보장은 없다. 이 알고리즘이 빨리 끝난다는 것은 다시 던진 기록을 거꾸로 따라가 나무로 정리하고, 그 나무가 나타날 확률을 세어 증명한다.

# 정의

서로 독립인 확률변수 $X_1,\dots,X_n$ 과 사건 $A_1,\dots,A_m$ 이 있고, 각 $A_i$ 는 변수의 부분집합 $\mathrm{vbl}(A_i)$ 의 값만으로 정해진다. $i\ne j$ 이고 $\mathrm{vbl}(A_i)\cap\mathrm{vbl}(A_j)\ne\varnothing$ 이면 $A_j$ 를 $A_i$ 의 이웃이라 하고, 이웃 전체를 $\Gamma(A_i)$ 로 쓴다.

```typescript
// sample(v) 는 변수 v 의 분포에서 새 값을 뽑는다. holds(A, x) 는 값 x 에서 사건 A 가 일어나는지 판정한다
function moserTardos(vars: Variable[], events: Event[]): Assignment {
  const x = new Map(vars.map((v) => [v, sample(v)]));
  for (;;) {
    const bad = events.find((A) => holds(A, x));
    if (bad === undefined) return x; // 나쁜 사건이 하나도 일어나지 않는다
    for (const v of bad.vbl) x.set(v, sample(v)); // 그 사건의 변수만 다시 뽑는다
  }
}
```

일어난 사건 가운데 어느 것을 고르는지는 결과의 기댓값 상한에 영향을 주지 않는다.

# 성질

## 기대 반복 횟수

실수 $y_1,\dots,y_m\in(0,1)$ 이 모든 $i$ 에서

$$
\Pr\lbrack A_i\rbrack\le y_i\prod_{A_j\in\Gamma(A_i)}(1-y_j)
$$

를 만족하면, 알고리즘이 $A_i$ 의 변수를 다시 뽑는 횟수의 기댓값은 $y_i/(1-y_i)$ 이하다[^1]. 이 조건은 비대칭형 국소 보조정리의 조건과 같다.

대칭형. 모든 사건의 확률이 $p$ 이하이고 이웃이 $d$ 개 이하이며 $e\thinspace p\thinspace(d+1)\le 1$ 이면, $y_i=1/(d+1)$ 로 두어 다시 뽑기의 총 횟수의 기댓값이 $m/d$ 이하다.

## 증거 나무

증명의 요지. 다시 뽑은 사건을 차례로 $C_1,C_2,\dots$ 라 한다. 단계 $t$ 의 증거 나무(witness tree)는 뿌리에 $C_t$ 를 놓고 $s=t-1,t-2,\dots,1$ 의 순서로, $C_s$ 가 나무의 어떤 꼭짓점의 사건과 같거나 이웃이면 그런 꼭짓점 가운데 가장 깊은 것의 자식으로 $C_s$ 를 붙여 만든다. 서로 다른 단계의 증거 나무는 서로 다르다.

변수마다 독립인 표본을 무한히 미리 뽑아 두고 다시 뽑을 때 다음 표본을 쓴다고 보면, 주어진 나무 $\tau$ 가 어떤 단계의 증거 나무로 나타날 확률은

$$
\Pr\lbrack\tau\text{ 가 나타난다}\rbrack\le\prod_{v\in\tau}\Pr\lbrack A_{\ell(v)}\rbrack
$$

이하다. 여기서 $\ell(v)$ 는 꼭짓점 $v$ 의 사건 번호다. 나무의 각 꼭짓점이 요구하는 사건은 서로 다른 표본들에서 일어나야 하기 때문에 확률이 곱으로 나뉜다. 뿌리가 $A_i$ 인 나무 전체에 대해 이 곱을 더하면, 사건 $A_j$ 가 붙은 꼭짓점이 자기 자신과 이웃의 사건 $A_k$ 마다 확률 $y_k$ 로 자식을 낳는 [분지과정](branching-processes.md)과 견주어 합이 $y_i/(1-y_i)$ 이하로 나온다.

## 엔트로피 압축

Moser 는 그 전에 $k$ 개 변수의 절로 된 논리식에 대해 같은 알고리즘이 끝난다는 것을 다른 방법으로 증명했다[^2]. 알고리즘이 오래 돌면 쓴 무작위 비트를 다시 뽑은 기록과 마지막 값으로 복원할 수 있고, 그 기록의 길이가 쓴 비트 수보다 짧아져 모순이 나온다. 이 논법을 엔트로피 압축(entropy compression)이라 한다.

# 활용

- 충족 가능성. 위 조건을 만족하는 $k$ 개 변수 절의 논리식에서 모든 절이 참인 값을 기대 다항시간에 찾는다.
- 초그래프의 두 색 칠하기. 모든 변이 원소 $k$ 개이고 각 변이 다른 변 $d$ 개 이하와 만나며 $e\thinspace 2^{1-k}(d+1)\le 1$ 이면, 원소를 두 색으로 칠해 단색인 변이 없게 하는 색칠을 찾는다. 변마다 단색일 확률이 $2^{1-k}$ 이므로 대칭형 조건이 성립한다.
- 순열 위의 사건. 무작위 순열의 사건처럼 독립 변수로 정해지지 않는 사건에 대해서는 이 알고리즘을 확장한 판본이 있다[^3].

[^1]: R. A. Moser, G. Tardos, "A constructive proof of the general Lovász local lemma", Journal of the ACM 57(2) (2010), Article 11.
[^2]: R. A. Moser, "A constructive proof of the Lovász local lemma", Proceedings of the 41st ACM Symposium on Theory of Computing (2009), 343–350.
[^3]: D. G. Harris, A. Srinivasan, "A constructive algorithm for the Lovász local lemma on permutations", Proceedings of the 25th ACM-SIAM Symposium on Discrete Algorithms (2014), 907–925.

# 연관 문서

## 선수지식

- [확률적 방법](probabilistic-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #algorithms #probability
