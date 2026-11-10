# p 핵

# 개요

**p 핵(p-core)** 은 Young 도형에서 $p$ 칸짜리 테두리 띠를 더 뗄 수 없을 때까지 떼고 남은 도형이다. [대칭군](symmetric-groups.md) $S_3$ 의 표현을 표수 $2$ 의 [체](fields.md) 위에서 보면 $-1=1$ 이어서 자명표현과 부호표현이 같은 표현이 되고, 2 차원 표현은 따로 남는다. 도형으로는 $(3)$ 과 $(1,1,1)$ 에서 두 칸 띠를 떼면 둘 다 $(1)$ 이 남고, $(2,1)$ 에서는 뗄 두 칸 띠가 없다.

기약표현들이 표수 $p$ 에서 어떤 묶음으로 엉키는지는 도형의 $p$ 핵을 비교해 정한다.

# 직관

$S_3$ 의 기약표현은 자명표현, 부호표현, 그리고 [Specht 가군](specht-modules.md) $S^{(2,1)}$ 셋이다. $S^{(2,1)}$ 은 $x_1-x_2$ 와 $x_1-x_3$ 이 펼치는 공간이고, 순열은 변수의 번호를 바꾼다.

표수 $2$ 에서는 $-1=1$ 이다. 부호표현은 호환을 $-1$ 배로 보내므로 자명표현과 같아진다. $S^{(2,1)}$ 은 표수 $2$ 에서도 순열이 고정하는 0 아닌 원소가 없어 다른 두 표현과 같은 묶음에 들지 않는다. 세 표현은 $\lbrace(3),(1,1,1)\rbrace$ 와 $\lbrace(2,1)\rbrace$ 두 묶음으로 나뉜다.

표수 $3$ 에서는 $S^{(2,1)}$ 의 원소 $(x_1-x_2)+(x_1-x_3)=2x_1-x_2-x_3$ 이 $-(x_1+x_2+x_3)$ 과 같다. 이 원소는 모든 순열이 고정하므로 $S^{(2,1)}$ 안에 자명표현이 들어 있고, 그 몫은 부호표현이다. 세 표현이 모두 한 묶음으로 이어진다.

도형에서 두 칸 띠를 떼면 $(3)$ 과 $(1,1,1)$ 은 $(1)$ 이 되고 $(2,1)$ 은 그대로다. 세 칸 띠를 떼면 세 도형 모두 빈 도형이 된다. 남은 도형이 같은 것끼리가 위의 묶음과 같다.

# 정의

## p 핵과 무게

[Murnaghan–Nakayama 규칙](murnaghan-nakayama-rule.md) 문서의 테두리 띠 가운데 칸이 $p$ 개인 것을 $p$ 띠라 한다. 분할 $\lambda$ 에서 떼고 남은 것이 분할의 도형인 $p$ 띠를, 그런 띠가 없을 때까지 차례로 뗀다. 남은 도형을 $\lambda$ 의 **p 핵(p-core)** 이라 하고, 뗀 띠의 수 $w$ 를 $\lambda$ 의 **p 무게(p-weight)** 라 한다. 남는 도형은 떼는 순서와 무관하다(성질 절).

$\lambda=(3,2)$, $p=2$ 이면 둘째 행의 두 칸을 떼어 $(3)$ 이 되고, 첫 행의 끝 두 칸을 떼어 $(1)$ 이 된다. 2 핵은 $(1)$ 이고 무게는 $2$ 다. $p=3$ 이면 칸 $(1,2),(1,3),(2,2)$ 로 된 띠를 떼어 $(1,1)$ 이 남고, 3 핵은 $(1,1)$, 무게는 $1$ 이다. 뗄 $p$ 띠가 없는 분할은 자기 자신이 $p$ 핵이고, 이런 분할을 그냥 $p$ 핵이라 부른다.

## p 블록

유한군 $G$ 의 [켤레류](conjugacy-classes.md) $C$ 와 기약 지표 $\chi$ 에 대해 다음 값을 $\chi$ 의 중심 지표(central character) 값이라 한다. $g$ 는 $C$ 의 원소다.

$$
\omega_\chi(C)=\frac{\vert C\vert\thinspace\chi(g)}{\chi(1)}
$$

$\omega_\chi(C)$ 는 $C$ 의 원소 전체의 합이 표현에서 작용하는 스칼라이고, 대수적 정수다. 대칭군에서는 지표값이 정수이므로 $\omega_\chi(C)$ 도 정수다. 대칭군의 두 기약 지표 $\chi,\psi$ 가 모든 켤레류 $C$ 에서 $\omega_\chi(C)\equiv\omega_\psi(C)\pmod p$ 를 만족하면 같은 **p 블록(p-block)** 에 든다고 한다[^1]. 일반 유한군에서는 법 $p$ 대신 $p$ 를 포함하는 대수적 정수환의 극대 아이디얼을 법으로 쓴다.

$S_3$ 의 켤레류 크기는 항등원 $1$, 호환 $3$, 3-순환 $2$ 다. [지표표](character-table.md)에서 다음이 나온다.

| 지표 | 항등원 | 호환 | 3-순환 |
| --- | --- | --- | --- |
| (3) | $1$ | $3$ | $2$ |
| (1,1,1) | $1$ | $-3$ | $2$ |
| (2,1) | $1$ | $0$ | $-1$ |

법 $2$ 로 보면 앞의 두 행이 $1,1,0$ 으로 같고 셋째 행은 $1,0,1$ 이다. 법 $3$ 으로 보면 세 행이 모두 $1,0,2$ 다. 직관 절의 묶음과 같다.

# 성질

## 주판

분할 $\lambda=(\lambda_1,\dots,\lambda_k)$ 에 대해 $\beta_i=\lambda_i+k-i$ 로 둔 서로 다른 수의 집합을 $\lambda$ 의 $\beta$ 수(beta-numbers)라 한다. $\lambda$ 에서 $p$ 띠를 떼는 것은 $\beta$ 수 하나 $\beta_i$ 를 $\beta_i-p$ 로 바꾸는 것과 같다. 단, $\beta_i-p\ge 0$ 이고 $\beta_i-p$ 가 이미 $\beta$ 수가 아니어야 한다[^2].

수 $0,1,2,\dots$ 를 $p$ 로 나눈 나머지에 따라 $p$ 개의 막대에 꿰고, $\beta$ 수 자리에 구슬을 놓은 것을 주판(abacus)이라 한다. $p$ 띠를 떼는 것은 구슬 하나를 같은 막대에서 한 칸 위로 올리는 것이다. 구슬을 모두 위로 밀어 올리면 $p$ 핵이 나오고, 결과는 올리는 순서와 무관하다. 무게는 구슬이 올라간 칸 수의 합이다.

$\lambda=(3,2)$, $k=2$ 이면 $\beta$ 수는 $4,2$ 다. $p=2$ 이면 둘 다 나머지 $0$ 의 막대에 있다. $2$ 를 $0$ 으로, $4$ 를 $2$ 로 올리면 $\beta$ 수 $2,0$ 이 남고 분할 $(1)$ 이 된다.

## 갈고리 길이

$\lambda$ 가 $p$ 핵인 것은 $\lambda$ 의 어느 칸의 갈고리 길이도 $p$ 로 나누어떨어지지 않는 것과 동치다[^2]. 이때 [갈고리 길이 공식](hook-length-formula.md) $f^\lambda=n!/\prod h$ 에서 분모에 $p$ 가 없으므로, $f^\lambda$ 가 $n!$ 과 같은 횟수만큼 $p$ 로 나누어떨어진다.

$(2,1)$ 의 갈고리 길이는 $3,1,1$ 이고 짝수가 없으므로 2 핵이다. $f^{(2,1)}=2$ 와 $3!=6$ 이 모두 $2$ 로 한 번 나누어떨어진다. 계단 꼴 $(k,k-1,\dots,1)$ 의 갈고리 길이는 모두 홀수이고, 2 핵은 계단 꼴뿐이다.

## 법 p 로 본 칸 내용

칸 $(i,j)$ 의 내용(content)은 $j-i$ 다. $p$ 띠는 내용이 연이은 $p$ 개의 칸이므로, 떼면 내용을 법 $p$ 로 본 나머지가 $0,1,\dots,p-1$ 인 칸이 하나씩 빠진다. 그래서 크기가 같은 두 분할의 $p$ 핵이 같으면 두 도형에서 나머지가 $r$ 인 칸의 수가 모든 $r$ 에서 같다. 거꾸로 이 수들이 모두 같으면 $p$ 핵도 같다[^2].

$(3)$ 의 내용은 $0,1,2$ 이고 $(1,1,1)$ 의 내용은 $0,-1,-2$ 다. 법 $2$ 로는 둘 다 나머지 $0$ 이 두 칸, $1$ 이 한 칸이다. $(2,1)$ 의 내용은 $0,1,-1$ 이고 나머지 $1$ 이 두 칸이어서 다르다.

## Nakayama 추측

$\chi^\lambda$ 와 $\chi^\mu$ 가 같은 $p$ 블록에 드는 것은 $\lambda$ 와 $\mu$ 의 $p$ 핵이 같은 것과 동치다. Nakayama 가 추측했고[^3] Brauer 와 Robinson 이 증명했다[^4]. 이름은 Nakayama 추측(Nakayama conjecture)으로 남았다. 정의 절의 $S_3$ 표가 $p=2,3$ 에서 이것을 보인다.

## 무게와 결손군

$p$ 블록의 지표들은 $p$ 핵과 함께 무게 $w$ 도 같다. 무게가 $w$ 인 블록의 결손군(defect group)은 $S_{pw}$ 의 [Sylow 정리](sylow-theorems.md)의 Sylow $p$ 부분군과 켤레다[^2]. 무게가 $0$ 인 블록은 $p$ 핵인 분할 하나로 이루어지고, 그 Specht 가군은 표수 $p$ 에서도 기약이다. $S_3$ 의 $p=2$ 에서 $(2,1)$ 이 무게 $0$ 이고, $\lbrace(3),(1,1,1)\rbrace$ 는 무게 $1$ 이라 결손군이 $S_2$ 다.

# 활용

- 블록 사이의 동치. Chuang 과 Rouquier 는 대칭군의 두 $p$ 블록의 무게가 같으면 두 블록의 [가군](modules.md) 범주에서 만든 도래 범주(derived category)가 서로 동치라는 것을 증명했다[^5]. 그 결과로 대칭군에서 결손군이 가환인 블록에 대한 Broué 추측(Broué's conjecture)이 성립한다.
- 분할의 셈. 모든 양의 정수 $n$ 은 $t\ge 4$ 이면 크기가 $n$ 인 $t$ 핵을 가진다[^6]. 증명은 $t$ 핵의 개수의 [생성함수](generating-functions.md)를 [모듈러 형식](modular-forms.md)으로 보고 그 계수가 양수임을 보인다.

[^1]: G. James, A. Kerber, *The Representation Theory of the Symmetric Group*, Addison-Wesley (1981), 6.1 절.
[^2]: G. James, A. Kerber, *The Representation Theory of the Symmetric Group*, Addison-Wesley (1981), 2.7 절과 6.2 절.
[^3]: T. Nakayama, On some modular properties of irreducible representations of a symmetric group I, II, *Jap. J. Math.* **17** (1941), 165–184, 411–423.
[^4]: R. Brauer, On a conjecture by Nakayama, *Trans. Roy. Soc. Canada Sect. III* **41** (1947), 11–19. G. de B. Robinson, On a conjecture by Nakayama, *Trans. Roy. Soc. Canada Sect. III* **41** (1947), 20–25.
[^5]: J. Chuang, R. Rouquier, Derived equivalences for symmetric groups and sl₂-categorification, *Ann. of Math.* **167** (2008), 245–298.
[^6]: A. Granville, K. Ono, Defect zero p-blocks for finite simple groups, *Trans. Amer. Math. Soc.* **348** (1996), 331–347.

# 연관 문서

## 선수지식

- [Murnaghan–Nakayama 규칙](murnaghan-nakayama-rule.md)

## 더 알아보기

아직 연결한 문서가 없다.

#group_theory #combinatorics #algebra
