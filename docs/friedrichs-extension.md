# Friedrichs 확장

# 개요

**Friedrichs 확장(Friedrichs extension)** 은 아래로 유계인 대칭 작용소에 붙는 자기수반 확장이다. 작용소가 정하는 이차형식을 형식 노름으로 닫고, 닫힌 형식에 대응하는 자기수반 작용소를 취해 얻는다.

자기수반 확장이 여럿일 때 Friedrichs 확장은 원래 형식의 하한을 그대로 갖는 확장이다. 다른 확장은 하한이 내려가거나 아래로 유계인 성질을 잃을 수 있다.

# 직관

[비유계 작용소](unbounded-operators.md)의 결손지수가 $0$ 이 아니면 자기수반 확장이 여럿이다. 구간 $(0,1)$ 의 콤팩트 지지 매끄러운 함수에 $Tu=-u''$ 를 두면 결손지수가 $2$ 이고, 부분적분으로

$$
\langle Tu,u\rangle=\int_0^1\lvert u'\rvert^2\thinspace dx\ge 0
$$

이므로 $T$ 의 값은 아래로 유계다. 확장 가운데 이 성질을 잃는 것이 있다.

경계조건 $u'(0)=\sigma u(0)$ 과 $u'(1)=-\sigma u(1)$ 로 정해지는 확장을 본다. $\lambda=-k^2$ 에 대해 $u(x)=\cosh\bigl(k(x-\tfrac12)\bigr)$ 가 방정식 $-u''=\lambda u$ 를 풀고, 양 끝의 조건은 $\sigma=-k\thinspace\tanh(k/2)$ 하나로 모인다. $\sigma$ 가 음수이면 이 식을 만족하는 $k\gt 0$ 이 있어 고윳값 $-k^2$ 이 음수다. $k$ 를 키우면 $\sigma$ 가 아래로 발산하므로, $\sigma$ 를 충분히 음수로 잡으면 고윳값을 얼마든지 아래로 내릴 수 있다.

$\int_0^1\lvert u'\rvert^2dx$ 라는 값은 콤팩트 지지 함수에서 이미 정해져 있고 확장을 고르는 일과 무관하다. 그 값을 유지하면서 정의역만 넓히려면, 작용소가 아니라 이 적분을 먼저 넓힌다. 적분과 $L^2$ 노름을 합친 노름으로 정의역을 완비화하면 $u(0)=u(1)=0$ 인 함수들이 나오고, 이 공간에서 되돌린 작용소의 고윳값은 $n^2\pi^2$ 으로 전부 양수다.

# 정의

## 아래로 유계인 대칭 작용소

[Hilbert 공간](hilbert-spaces.md) $\mathcal H$ 의 조밀한 정의역 $D(T)$ 에서 정의된 대칭 작용소 $T$ 가 어떤 실수 $c$ 에 대해

$$
\langle Tu,u\rangle\ge c\thinspace\Vert u\Vert^2\qquad(u\in D(T))
$$

를 만족하면 $T$ 를 **아래로 유계**라 한다.

## 이차형식과 형식 노름

$$
t\lbrack u\rbrack=\langle Tu,u\rangle,\qquad \Vert u\Vert_t^2=t\lbrack u\rbrack+(1-c)\thinspace\Vert u\Vert^2
$$

를 $T$ 의 **이차형식**과 **형식 노름**이라 한다. $\Vert\cdot\Vert_t$ 는 내적에서 나오는 노름이고 $\Vert u\Vert_t\ge\Vert u\Vert$ 다. $D(T)$ 를 이 노름으로 완비화한 것은 $\mathcal H$ 의 부분공간으로 실현되며, 그 부분공간을 **형식 정의역** $Q(t)$ 라 하고 $t$ 를 $Q(t)$ 로 연속확장한 것을 $\bar t$ 라 쓴다.

## Friedrichs 확장

$\bar t$ 에 성질 절의 표현정리를 적용해 얻는 자기수반 작용소를 $T$ 의 **Friedrichs 확장**이라 하고 $T_F$ 로 쓴다.

# 성질

## 이차형식의 표현정리

**정리.** $Q$ 가 $\mathcal H$ 에서 조밀하고 $q$ 가 $Q$ 에서 아래로 유계인 닫힌 이차형식이면, 다음을 만족하는 자기수반 작용소 $A$ 가 유일하게 있다.[^1]

$$
D(A)\subset Q,\qquad \langle Au,v\rangle=q\lbrack u,v\rbrack\quad(u\in D(A),\thinspace v\in Q)
$$

증명의 요지. $Q$ 를 형식 노름의 Hilbert 공간으로 보면 $q+(1-c)\langle\cdot,\cdot\rangle$ 이 그 내적이다. $v\mapsto\langle f,v\rangle$ 는 이 공간의 유계 범함수이므로 Riesz 표현정리가 $u$ 를 준다. 이 대응 $f\mapsto u$ 는 유계 자기수반이고 단사이므로 그 역이 자기수반 작용소를 주고, 상수 $1-c$ 를 빼면 $A$ 가 된다. ∎

## 하한의 보존

**정리.** $T_F$ 의 스펙트럼 하한은 다음과 같다.

$$
\min\mathrm{spec}\thinspace T_F=\inf_{u\in D(T),\thinspace u\ne 0}\frac{\langle Tu,u\rangle}{\Vert u\Vert^2}
$$

$D(T)$ 가 $Q(t)$ 에서 형식 노름으로 조밀하므로 우변의 하한은 $Q(t)$ 전체에서 취한 하한과 같다. 그 하한이 $\bar t$ 의 하한이고, 표현정리가 그것을 $T_F$ 의 스펙트럼 하한으로 옮긴다. 아래로 유계인 다른 자기수반 확장의 하한은 이 값보다 크지 않다.

## 유일성

**정리.** $T$ 가 본질적 자기수반이면 $T_F$ 는 $T$ 의 폐포이고 유일한 자기수반 확장이다.

결손지수가 $0$ 이면 자기수반 확장이 하나뿐이므로 Friedrichs 확장이 그 하나와 같다. 결손지수가 양수이면 아래로 유계인 확장 가운데 Friedrichs 확장의 형식 정의역이 가장 작고, 하한이 가장 낮은 것은 Krein 확장이다.[^2]

## 변분 특성

$T_F$ 가 이산 스펙트럼을 가지면 고윳값이

$$
\lambda_n=\min_{\substack{V\subset Q(t)\cr \dim V=n}}\thinspace\max_{u\in V,\thinspace u\ne 0}\frac{\bar t\lbrack u\rbrack}{\Vert u\Vert^2}
$$

로 적힌다. 분모와 분자가 모두 형식으로만 적히므로 작용소의 정의역을 알지 않고 고윳값을 추정할 수 있다.

# 활용

- **Dirichlet Laplacian.** 영역 $\Omega$ 의 콤팩트 지지 매끄러운 함수에 $-\Delta$ 를 두면 형식 정의역이 $H_0^1(\Omega)$ 이고 Friedrichs 확장이 Dirichlet 경계조건의 Laplacian이다. Neumann 조건은 형식 정의역을 $H^1(\Omega)$ 로 잡아 얻는 다른 확장이다.
- **Rayleigh–Ritz 방법.** 변분 특성의 우변에서 $V$ 를 유한차원 시험공간으로 제한하면 고윳값의 위쪽 추정이 나온다. 유한요소법의 고윳값 수렴이 이 추정에 기댄다.
- **Schrödinger 작용소의 하한.** 퍼텐셜 $q$ 가 아래로 유계이면 $-\Delta+q$ 의 형식이 아래로 유계이므로 Friedrichs 확장이 있고 스펙트럼 하한이 $\inf q$ 보다 크지 않다. 특이 퍼텐셜에서는 형식이 아래로 유계인지가 확장의 존재 여부를 정한다.
- **경계조건의 선택.** [극한점·극한원 분류](limit-point-limit-circle.md)가 경계조건이 몇 개 필요한지를 정하고, Friedrichs 확장이 그 가운데 하나를 형식의 하한으로 지정한다. Legendre 작용소에서 이 확장이 다항식 고유함수를 주는 확장이다.

[^1]: T. Kato, *Perturbation Theory for Linear Operators*, 2 판, Springer (1976) 6 장 정리 2.1 과 2.6 이다.

[^2]: M. G. Krein, *The theory of self-adjoint extensions of semi-bounded Hermitian transformations and its applications*, Mat. Sb. **20** (1947), 431–495.

# 연관 문서

## 선수지식

- [비유계 작용소](unbounded-operators.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis
