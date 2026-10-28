# Lyndon 단어

# 개요

**Lyndon 단어(Lyndon word)** 는 원형으로 돌려 읽은 문자열들 가운데 사전순으로 가장 앞에 오고, 같은 조각이 되풀이된 꼴이 아닌 문자열이다. 목걸이에 구슬 $0,0,1,1$ 을 꿰면 읽기 시작하는 자리에 따라 $0011,0110,1100,1001$ 이 나오고 이 가운데 가장 작은 $0011$ 이 Lyndon 단어이지만, $0101$ 은 두 칸 돌리면 자기 자신이 되어 Lyndon 단어가 아니다. Lyndon 단어는 목걸이를 대표 문자열 하나로 세는 데 쓰고, 모든 문자열이 Lyndon 단어들의 곱으로 유일하게 쪼개진다는 성질을 문자열 알고리즘과 자유 Lie 대수의 기저에 쓴다.

# 직관

Lyndon 단어는 전순서가 주어진 알파벳 위의 비지 않은 문자열로, 자기의 모든 진짜 순환 이동보다 사전순으로 엄격히 작은 것이다.

글자가 $k$ 개인 알파벳 위의 길이 $n$ 인 Lyndon 단어의 수는 [Möbius 반전 공식](mobius-inversion.md)으로 $\frac1n\sum_{d\mid n}\mu(d)k^{n/d}$ 이다. 모든 문자열은 사전순으로 감소하지 않는 Lyndon 단어들의 곱으로 유일하게 분해된다. R. C. Lyndon 이 1954 년에 자유군의 교환자를 다루며 도입했다[^1].

길이 $4$ 인 이진 문자열 $16$ 개를 원형으로 놓고, 돌려서 같아지는 것을 하나로 묶는다. $0001$ 을 돌리면 $0010,0100,1000$ 이 나와 네 개가 한 묶음이다. $0101$ 을 돌리면 $1010$ 만 나와 두 개가 한 묶음이고, $0000$ 은 혼자 한 묶음이다. 묶음의 크기가 $4$ 보다 작은 것은 문자열이 더 짧은 조각의 반복일 때다.

반복이 아닌 문자열의 묶음은 크기가 정확히 $4$ 이고, 묶음 안에서 사전순으로 가장 작은 것을 대표로 고른다. 대표는 $0001,0011,0111$ 셋이고, 이 셋이 길이 $4$ 인 Lyndon 단어다. 반복인 문자열은 $0000,1111,0101,1010$ 넷이므로 대표의 수는 $(16-4)/4=3$ 으로 세어진다.

# 정의

## 사전순과 순환 이동

알파벳 $A$ 에 전순서 $\lt$ 가 있다. 문자열 $u,v$ 에 대해 $u$ 가 $v$ 의 진짜 접두사이거나, 처음으로 다른 자리에서 $u$ 의 글자가 더 작으면 $u\lt v$ 라 쓰고 이것을 **사전순(lexicographic order)** 이라 한다. $w=xy$ 일 때 $yx$ 를 $w$ 의 순환 이동이라 하고, $x,y$ 가 둘 다 비지 않았으면 진짜 순환 이동이라 한다.

## Lyndon 단어

비지 않은 문자열 $w$ 가 모든 진짜 순환 이동보다 엄격히 작으면 Lyndon 단어라 한다. 길이 $1$ 인 문자열은 모두 Lyndon 단어다. 어떤 문자열 $u$ 와 $m\ge 2$ 에 대해 $w=u^m$ 꼴이 아니면 $w$ 를 **원시적(primitive)** 이라 한다. Lyndon 단어는 원시적이다. $w=u^m$ 이면 앞의 $u$ 하나를 뒤로 돌린 순환 이동이 $w$ 자신이기 때문이다.

글자가 $k$ 개인 알파벳 위의 길이 $n$ 인 Lyndon 단어의 수를 $L_k(n)$ 으로 쓴다.

# 성질

## 접미사 판정

정리. 비지 않은 $w$ 가 Lyndon 단어인 것과 $w$ 가 모든 진짜 접미사보다 엄격히 작은 것이 동치다.

증명의 요지. $w=xy$ ($x,y$ 는 비지 않음)에서 $y$ 가 $w$ 의 접두사가 아니면, $w$ 와 $y$ 가 처음 다른 자리가 $y$ 안에 있으므로 $w\lt yx$ 와 $w\lt y$ 가 동치다. $y$ 가 $w$ 의 접두사이면 $y\lt w$ 이므로 접미사 조건이 깨지고, $w=yz$ 로 쓰면 $w$ 도 Lyndon 단어가 아니다. Lyndon 단어라면 $yz=w\lt yx$ 에서 $z\lt x$ 이고 $xy=w\lt zy$ 에서 $x\le z$ 이어서 모순이기 때문이다.

## 곱과 표준 분해

정리. $u,v$ 가 Lyndon 단어이고 $u\lt v$ 이면 $uv$ 도 Lyndon 단어다. 역으로 길이 $2$ 이상인 Lyndon 단어 $w$ 에서 $v$ 를 사전순으로 가장 작은 진짜 접미사로 두고 $w=uv$ 로 쓰면, $u$ 와 $v$ 가 모두 Lyndon 단어이고 $u\lt v$ 다.

뒤의 분해 $w=(u,v)$ 를 $w$ 의 **표준 분해(standard factorization)** 라 한다.

## 개수

정리. $L_k(n)=\dfrac1n\displaystyle\sum_{d\mid n}\mu(d)\thinspace k^{n/d}$ 이다.

증명의 요지. 길이 $n$ 인 문자열은 원시적인 $u$ 와 $n=dm$ 에 대해 $u^m$ 으로 유일하게 쓰인다. 길이 $d$ 인 원시적 문자열은 순환 이동이 서로 다른 $d$ 개이고, 그중 정확히 하나가 Lyndon 단어다. 따라서

$$
k^n=\sum_{d\mid n}d\thinspace L_k(d)
$$

이고, Möbius 반전 공식을 적용하면 위 식이 나온다. $k=2$ 이면 $L_2(1),\dots,L_2(6)=2,1,2,3,6,9$ 다.

$k=q$ 가 소수의 거듭제곱이면 같은 식이 [유한체](finite-fields.md) $\mathbb F_q$ 위의 차수 $n$ monic 기약다항식의 수다. 두 개수의 등식 $q^n=\sum_{d\mid n}d\thinspace L_q(d)$ 가 같기 때문이다.

## Chen–Fox–Lyndon 분해

정리. 비지 않은 모든 문자열 $w$ 는

$$
w=\ell_1\ell_2\cdots\ell_m,\qquad \ell_1\ge\ell_2\ge\cdots\ge\ell_m
$$

꼴로, 각 $\ell_i$ 가 Lyndon 단어가 되게 유일하게 분해된다[^2].

증명의 요지. 존재는 $w$ 를 글자 하나씩으로 쪼갠 뒤, 이웃한 두 조각이 $\ell_i\lt\ell_{i+1}$ 이면 곱 성질로 합치는 일을 더 합칠 수 없을 때까지 되풀이해 얻는다. 유일성은 $\ell_m$ 이 $w$ 의 사전순으로 가장 작은 접미사라는 것으로 보인다.

J.-P. Duval 은 이 분해를 비교 $O(n)$ 번에 구하는 알고리즘을 1983 년에 발표했다[^3].

```typescript
// Duval 알고리즘. s 의 Chen–Fox–Lyndon 분해를 이루는 Lyndon 단어들을 왼쪽부터 돌려준다.
function duval(s: string): string[] {
  const n = s.length;
  const factors: string[] = [];
  let i = 0;
  while (i < n) {
    let j = i + 1; // s[j] 를 볼 차례
    let k = i;     // s[j] 와 비교할 자리. j - k 가 지금 반복되는 Lyndon 단어의 길이
    while (j < n && s[k] <= s[j]) {
      k = s[k] < s[j] ? i : k + 1;
      j++;
    }
    while (i <= k) {
      factors.push(s.slice(i, i + j - k));
      i += j - k;
    }
  }
  return factors;
}
```

# 활용

- [de Bruijn 수열](de-bruijn-sequences.md). 길이가 $n$ 의 약수인 Lyndon 단어를 사전순으로 이어 붙이면 사전순으로 가장 작은 de Bruijn 수열이 나온다.
- 자유 Lie 대수의 기저. 생성원이 $k$ 개인 자유 [Lie 대수](lie-algebras.md)에서 Lyndon 단어마다 표준 분해를 따라 괄호를 친 원소들이 기저를 이룬다. 그래서 차수 $n$ 부분의 차원이 $L_k(n)$ 이고, 이 차원 공식을 Witt 공식(Witt's formula)이라 한다[^4].
- 원형 문자열의 정규형. 원시적인 문자열의 순환 이동 가운데 가장 작은 것은 Lyndon 단어이고, $ww$ 에 Duval 알고리즘을 돌려 선형 시간에 찾는다. 원형 유전체 서열이나 다각형의 변 목록을 비교할 때 이 정규형을 쓴다.
- 목걸이의 세기. 돌려서 같은 것을 하나로 본 길이 $n$ 의 목걸이 수는 $\sum_{d\mid n}L_k(d)$ 이고, [Pólya 세기 정리](polya-enumeration.md)를 순환군에 적용한 식 $\frac1n\sum_{d\mid n}\varphi(d)k^{n/d}$ 과 같다.

[^1]: R. C. Lyndon, "On Burnside's problem", Transactions of the American Mathematical Society 77 (1954), 202–215.
[^2]: K.-T. Chen, R. H. Fox, R. C. Lyndon, "Free differential calculus IV. The quotient groups of the lower central series", Annals of Mathematics 68(1) (1958), 81–95.
[^3]: J.-P. Duval, "Factorizing words over an ordered alphabet", Journal of Algorithms 4(4) (1983), 363–381.
[^4]: E. Witt, "Treue Darstellung Liescher Ringe", Journal für die reine und angewandte Mathematik 177 (1937), 152–160.

# 연관 문서

## 선수지식

- [Möbius 반전 공식](mobius-inversion.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #algebra #algorithms
