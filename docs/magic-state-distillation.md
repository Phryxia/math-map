# 마법 상태 증류

# 개요

**마법 상태 증류(magic state distillation)** 는 잡음이 섞인 $T\vert +\rangle$ 상태 여러 개를 오류 없는 Clifford 게이트와 측정만으로 처리해, 잡음이 훨씬 적은 $T\vert +\rangle$ 하나를 얻는 절차다. [양자 오류정정부호](quantum-error-correction.md) 위에서는 Clifford 게이트를 부호 위에서 직접 걸 수 있지만, 보편 계산에 필요한 $T$ 게이트는 그렇게 걸리지 않는다. 마법 상태 증류는 $T$ 게이트를 깨끗한 $T\vert +\rangle$ 상태 하나로 바꾸어 걸고, 그 상태를 잡음 섞인 사본들에서 만든다.

# 직관

$\omega=e^{i\pi/4}$, $\vert A\rangle=T\vert +\rangle=\tfrac1{\sqrt2}(\vert 0\rangle+\omega\vert 1\rangle)$ 이라 하자. 큐비트 $\vert\psi\rangle=a\vert 0\rangle+b\vert 1\rangle$ 옆에 $\vert A\rangle$ 를 두고, $\vert\psi\rangle$ 를 제어로 $\vert A\rangle$ 쪽에 제어 NOT 게이트를 건다. 결과는

$$
\tfrac1{\sqrt2}\Bigl(a\vert 0\rangle(\vert 0\rangle+\omega\vert 1\rangle)+b\vert 1\rangle(\vert 1\rangle+\omega\vert 0\rangle)\Bigr)
$$

이다. 둘째 큐비트를 재어 $0$ 이 나오면 첫 큐비트는 $a\vert 0\rangle+\omega b\vert 1\rangle=T\vert\psi\rangle$ 이고, $1$ 이 나오면 $\omega a\vert 0\rangle+b\vert 1\rangle$ 이며 여기에 Clifford 게이트 $S=T^2$ 을 걸면 $T\vert\psi\rangle$ 이 된다. [양자 순간이동](quantum-teleportation.md)의 게이트 순간이동이 이것이다.

준비한 $\vert A\rangle$ 가 확률 $\varepsilon$ 로 틀려 있으면 걸린 $T$ 도 같은 확률로 틀린다. $\varepsilon=10^{-2}$ 인 상태 $15$ 개를 아래의 절차로 처리하면 틀릴 확률이 약 $35\varepsilon^3=3.5\times 10^{-5}$ 인 상태 하나가 나온다. 이렇게 얻은 상태 $15$ 개로 한 번 더 하면 약 $1.5\times 10^{-12}$ 이고, 처음 상태 $225$ 개가 들었다.

# 정의

## 마법 상태

[Gottesman–Knill 정리](gottesman-knill.md) 문서의 상태 $\vert A\rangle=T\vert +\rangle$ 를 **마법 상태(magic state)** 라 한다. 잡음 섞인 마법 상태는 Clifford 게이트를 무작위로 걸어 평균하면 다음 꼴로 바뀐다.

$$
\rho_\varepsilon=(1-\varepsilon)\vert A\rangle\langle A\vert+\varepsilon\thinspace Z\vert A\rangle\langle A\vert Z
$$

$\varepsilon$ 을 이 상태의 **오류율(error rate)** 이라 한다. 직관 절의 $\varepsilon=10^{-2}$ 이 이것이다.

## 증류 절차

오류율 $\varepsilon$ 인 마법 상태 $n$ 개에 Clifford 게이트와 계산 기저 측정만 걸고, 측정 결과가 정해진 값일 때만 남은 큐비트 $k$ 개를 출력하는 절차를 $n$ 대 $k$ **증류 절차(distillation protocol)** 라 한다. 출력의 오류율 $\varepsilon'$ 이 $\varepsilon$ 보다 작아야 한다.

## 15 대 1 절차

$15$ 큐비트로 $1$ 큐비트를 부호화하는 양자 Reed–Muller 부호(quantum Reed–Muller code)는 거리가 $3$ 이고, 모든 큐비트에 $T$ 를 하나씩 걸면 부호화된 큐비트에 $T^\dagger$ 를 건 것과 같다. 이 성질을 써서 마법 상태 $15$ 개를 소비해 부호 위에 $T^\dagger$ 를 걸고, 안정자를 재어 오류를 검출한 뒤 복호하는 절차가 Bravyi–Kitaev 의 $15$ 대 $1$ 절차다[^1].

# 성질

## 오류율의 감소

$15$ 대 $1$ 절차에서 검출되지 않는 오류는 $Z$ 오류가 부호의 논리 연산자 꼴로 놓인 경우뿐이고, 가장 가벼운 것은 무게 $3$ 이며 $35$ 가지다. 따라서

$$
\varepsilon'=35\varepsilon^3+O(\varepsilon^4)
$$

이다. 무게 $1$ 과 $2$ 의 오류는 안정자 측정에서 검출되어 그 출력을 버린다. 버리는 확률은 약 $15\varepsilon$ 이다.

## 반복과 비용

출력을 다시 입력으로 쓰면 $r$ 단계 뒤 오류율은 대략 $(35)^{(3^r-1)/2}\varepsilon^{3^r}$ 이고, 처음 상태 $15^r$ 개가 든다. 목표 오류율 $\delta$ 에 이르는 데 드는 상태 수는

$$
O\bigl(\log^{\gamma}(1/\delta)\bigr),\qquad\gamma=\log_315\approx 2.46
$$

이다. 입력 오류율이 절차마다 정해지는 문턱보다 작아야 한 단계마다 오류율이 준다.

## 보편성

Clifford 게이트와 $T$ 게이트로 된 게이트 집합은 보편이다. 임의의 1 큐비트 유니터리를 [Solovay–Kitaev 정리](solovay-kitaev.md)에 따라 정확도 $\delta$ 로 근사하는 데 $T$ 게이트가 $O(\log^c(1/\delta))$ 개 든다. Clifford 게이트만으로는 Gottesman–Knill 정리에 따라 고전 컴퓨터로 효율적으로 시뮬레이션된다. Clifford 회로에 마법 상태를 더하면 보편 양자 계산이 된다.

# 활용

- 결함 내성 양자 계산. 표면 부호(surface code) 위의 계산은 Clifford 게이트를 격자 수술이나 꼬기로 걸고, $T$ 게이트는 마법 상태 증류로 만든 상태를 소비해 건다. 증류 공장이 전체 큐비트의 큰 부분을 차지한다.
- 자원 계산. 양자 알고리즘의 비용을 $T$ 게이트 개수로 세는 것은 각 $T$ 게이트가 증류된 마법 상태 하나를 소비하기 때문이다.
- 자원 이론. 마법 상태가 Clifford 회로에 더하는 계산 능력을 측도로 재는 마법의 자원 이론에서, 증류 가능한 상태와 불가능한 상태의 경계를 다룬다.

[^1]: S. Bravyi, A. Kitaev, "Universal quantum computation with ideal Clifford gates and noisy ancillas", *Physical Review A* 71 (2005), 022316.

# 연관 문서

## 선수지식

- [Gottesman–Knill 정리](gottesman-knill.md)
- [양자 순간이동](quantum-teleportation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #linear_algebra #information_theory
