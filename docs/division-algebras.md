# 나눗셈 대수

# 개요

**나눗셈 대수(division algebra)** 는 $0$ 아닌 원소로 나눌 수 있는 대수다. 곱의 가환성은 요구하지 않고, 경우에 따라 결합성도 요구하지 않는다.

실수 위의 유한차원 결합 나눗셈 대수는 실수, 복소수, 사원수 셋뿐이고(Frobenius 정리), 결합성을 버리고 노름의 곱셈성만 남기면 팔원수가 더해져 넷이다([Hurwitz 정리](hurwitz-theorem.md)). 결합성과 노름을 둘 다 버려도 차원은 $1, 2, 4, 8$ 로 제한된다. 유한한 경우에는 비가환성 자체가 불가능하다([유한체](finite-fields.md) 밖에 유한 나눗셈환이 없다).

# 직관

복소수는 실수에 $i$ 를 더해 평면에 곱셈과 나눗셈을 준다. 같은 방법으로 3차원 공간에 나눗셈을 주려면 $1, i, j$ 를 기저로 두고 $i^2=j^2=-1$ 로 놓은 뒤 $ij$ 가 무엇인지 정해야 한다. $ij$ 도 이 공간의 원소이므로 $ij=a+bi+cj$ 로 쓸 수 있어야 한다. 양변에 왼쪽에서 $i$ 를 곱한다.

$$
-j=i(ij)=i(a+bi+cj)=-b+ai+c(a+bi+cj)=(ca-b)+(a+cb)i+c^2j
$$

$j$ 의 계수를 비교하면 $c^2=-1$ 인데 $c$ 는 실수다. 그러므로 $ij$ 는 $1, i, j$ 의 조합이 아니다. 새 원소 $k=ij$ 를 더해 4차원으로 간다.

남은 것은 $ji$ 다. $ji=ij$ 로 놓으면 결합성에서 $k^2=(ij)(ij)=i(ji)j=(ii)(jj)=1$ 이 나온다. 그러면 $(k-1)(k+1)=0$ 이고 $k\neq\pm 1$ 이므로 영인자가 생겨 나눗셈이 깨진다. 그래서 $ji=-ij$ 여야 하고, 가환성을 버린 자리에서 사원수가 나온다.

# 정의

체 $K$ 위의 **대수**는 $K$-벡터공간 $A$ 와 $K$-쌍선형 곱 $A\times A\to A$ 다. $A$ 가 **나눗셈 대수**라는 것은 $A\neq 0$ 이고, $0$ 아닌 $a$ 와 임의의 $b$ 마다 $ax=b$ 와 $ya=b$ 가 각각 유일한 해를 갖는 것이다. 유한차원에서는 이 조건이 영인자가 없다는 것과 같다.

## 나눗셈환

곱이 결합적이고 단위원이 있는 나눗셈 대수를 **나눗셈환**(division ring)이라 한다. 이때 $0$ 아닌 원소 전체가 곱셈군을 이룬다. 가환이면 [체](fields.md)다.

중심 $Z(A)=\lbrace z\in A:za=az\thinspace\text{ 모든 } a\in A\rbrace$ 는 체다. $A$ 가 $Z(A)$ 위에서 유한차원이면 그 차원은 제곱수 $n^2$ 이고, 이 $n$ 을 $A$ 의 **차수**라 한다.

## 사원수

$\mathbb H$ 는 $\mathbb R$ 위 4차원 결합대수이고 기저 $1, i, j, k$ 에 다음 관계를 준 것이다.

$$
i^2=j^2=k^2=ijk=-1
$$

켤레는 $\overline{a+bi+cj+dk}=a-bi-cj-dk$ 이고 노름은 $N(x)=x\bar x=a^2+b^2+c^2+d^2$ 다. $x\neq 0$ 이면 $N(x)\gt 0$ 이므로 $x^{-1}=\bar x/N(x)$ 가 있다.

## 합성 대수

노름 $N$ 이 $N(xy)=N(x)N(y)$ 를 만족하는 단위원 있는 대수를 **합성 대수**라 한다. 결합성은 요구하지 않는다. 노름이 $0$ 인 $0$ 아닌 원소가 없으면 나눗셈 대수다.

## Cayley–Dickson 이중화

켤레가 있는 대수 $A$ 에서 $A\oplus A$ 에 다음 곱을 준다.

$$
(a,b)(c,d)=(ac-d\bar b,\thinspace \bar a d+cb)
$$

켤레는 $\overline{(a,b)}=(\bar a,-b)$ 다. $\mathbb R$ 에서 시작해 $\mathbb C$, $\mathbb H$, $\mathbb O$ 를 차례로 얻는다. 단계마다 성질 하나를 잃는다. $\mathbb C$ 에서 켤레가 항등사상이 아니게 되고, $\mathbb H$ 에서 가환성을 잃고, $\mathbb O$ 에서 결합성을 잃는다.

## 팔원수

$\mathbb O$ 는 $\mathbb H$ 를 이중화한 8차원 합성 대수다. 결합적이지 않으나 두 원소가 생성하는 부분대수는 결합적이다. 이 성질을 **교대성**이라 한다.

# 성질

## Wedderburn 작은 정리

유한 나눗셈환은 가환이다.

증명은 중심을 $\mathbb F_q$ 로 두고 차수를 $n$ 이라 하여 $\vert A\vert=q^{n^2}$ 로 쓴 뒤 곱셈군 $A^\ast$ 의 켤레류 방정식을 세우는 것이다. 비중심 원소의 중심화군의 크기가 $q^d-1$ 꼴이고 $d$ 는 $n^2$ 의 진약수이므로, 원분다항식 $\Phi\_{n^2}(q)$ 가 $q-1$ 을 나누어야 한다. $n\gt 1$ 이면 $\vert\Phi\_{n^2}(q)\vert\gt q-1$ 이라 모순이다.

## Frobenius 정리

$\mathbb R$ 위의 유한차원 결합 나눗셈 대수는 $\mathbb R$, $\mathbb C$, $\mathbb H$ 세 가지다.

증명의 요지는 차원을 세는 것이다. $a\in A$ 마다 $\mathbb R\lbrack a\rbrack$ 는 유한차원 가환 나눗셈 대수이므로 $\mathbb R$ 의 유한확대이고, 따라서 $\mathbb R$ 또는 $\mathbb C$ 다. 그러므로 $V=\lbrace a\in A:a^2\in\mathbb R,\thinspace a^2\le 0\rbrace$ 의 원소는 제곱이 음수인 것이고, $A=\mathbb R\oplus V$ 가 벡터공간 분해임을 확인할 수 있다.

$V$ 에 $\langle a,b\rangle=-\tfrac12(ab+ba)$ 로 내적을 주면 직교기저의 원소들이 사원수의 관계를 만족한다. 직교기저가 셋 이상이면 넷째 원소가 앞 셋의 곱으로 결정되므로 $\dim V\le 3$ 이다.

## Hurwitz 정리

$\mathbb R$ 위의 유한차원 합성 대수는 $\mathbb R$, $\mathbb C$, $\mathbb H$, $\mathbb O$ 네 가지다.

증명은 Cayley–Dickson 이중화를 거꾸로 돌린다. 노름의 극화가 내적이고, 단위원의 직교여공간에서 원소 하나를 집으면 그 대수가 더 작은 합성 대수의 이중화로 적힌다. 이중화가 노름의 곱셈성을 보존하는 것은 원래 대수가 결합적일 때뿐이고 $\mathbb O$ 는 결합적이지 않으므로, 16차원에서 곱셈성이 깨진다.

## 차원 제약

결합성도 노름도 요구하지 않고 $\mathbb R^n$ 에 나눗셈 대수 구조가 있으면 $n$ 은 $1, 2, 4, 8$ 중 하나다.

증명은 위상이다. 나눗셈이 되면 $S^{n-1}$ 에 곱이 유도되어 단위원 역할을 하는 점을 갖는 공간, 곧 H-공간이 된다. 그런 구조에서 [Hopf 불변량](hopf-invariant.md)이 홀수인 사상 $S^{2n-1}\to S^n$ 이 나오고, [Steenrod 연산](steenrod-operations.md)의 Adem 관계로 증명하는 Adams 의 $1$ 정리가 그 $n$ 을 $1, 2, 4, 8$ 로 제한한다.

## Wedderburn–Artin 정리

체 $K$ 위의 유한차원 중심단순대수(central simple algebra) $A$ 마다 $K$ 위의 나눗셈 대수 $D$ 와 정수 $n$ 이 유일하게 있어 $A\cong M_n(D)$ 다.

그러므로 $K$ 위의 유한차원 나눗셈 대수는 [Brauer 군](brauer-groups.md)의 원소와 일대일로 대응한다. $K=\mathbb R$ 에서 Brauer 군은 $\mathbb Z/2$ 이고 두 원소가 $\mathbb R$ 과 $\mathbb H$ 다. $K$ 가 유한체이거나 대수적으로 닫혀 있으면 Brauer 군이 자명하고, 이것이 Wedderburn 작은 정리의 다른 표현이다.

# 활용

- [Brauer 군](brauer-groups.md)의 정의. 중심단순대수의 Brauer 동치류가 나눗셈 대수와 대응하므로, 이 군의 계산이 체 위의 나눗셈 대수를 모두 분류한다.
- 3차원 회전. 노름 $1$ 인 사원수의 곱이 $\mathbb R^3$ 의 회전을 주고, [Lie 군](lie-groups.md) $\mathrm{SU}(2)$ 가 단위 사원수군이며 $\mathrm{SU}(2)\to\mathrm{SO}(3)$ 이 이중덮개다.
- [Clifford 대수](clifford-algebras.md)의 예. 2차원 음정부호 [이차형식](quadratic-forms.md)의 Clifford 대수가 $\mathbb H$ 이고, $\mathbb R$ 위 Clifford 대수의 분류표에 나눗셈 대수로 등장하는 것은 $\mathbb R$, $\mathbb C$, $\mathbb H$ 뿐이다.
- 평행가능 구면. 차원 제약의 증명이 그대로 $S^{n-1}$ 이 평행가능일 조건을 $n\in\lbrace 1,2,4,8\rbrace$ 로 준다.
- [질량 공식](mass-formula.md). 확정 사원수 대수에서 극대 순서를 잡고 그 좌이념류를 자기동형군 크기로 가중해 세는 것이 Eichler 의 질량 공식이다.

# 연관 문서

## 선수지식

- [체](fields.md)

## 더 알아보기

- [Brauer 군](brauer-groups.md)

#field_theory #algebra #ring_theory #algebraic_topology
